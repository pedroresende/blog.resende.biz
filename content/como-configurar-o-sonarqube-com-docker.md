---
id: 58
title: Como configurar o SonarQube com Docker
date: "2021-10-11T10:35:00+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-configurar-o-sonarqube-com-docker/
coverImage: "/assets/blog/images/como-configurar-o-sonarqube-com-docker/sq.webp"
categories:
  - Personal
  - Software
tags:
  - sonarqube
  - docker
  - server
---

Hoje deixo-vos aqui um pequeno tutorial a explicar como configurar o [sonarqube](https://www.sonarqube.org) a correr em Docker.

Vou-vos começar por explicar o que é o SonarQube e como ele funciona. Trata-se de um software de gestão de código que permite ao utilizador analisar o código fonte de um projeto e gerir os resultados de análise estática. Para quem não sabe o que é a
análise estática, trata-se de verificar se o código segue os standards, se todas
as variáveis estão declaradas, se existem problemas de tipificação entre outros.

Vou partir do principio que já têm instalado o docker e o docker-compose, caso não tenham têm se seguir o [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) para instalar.

Vamos começar por criar um directório para o nosso projeto, para isso abram o terminal e executem o comando:

```bash

$ mkdir sonarqube
```

Vamos também criar mais alguns directórios para o nosso projeto, para isso executem o comando:

```bash

$ cd sonarqube
$ mkdir const data extensions logs pgdata
```

vamos então criar o nosso docker-compose.yml, com o seguinte conteúdo:

```bash

$ cat > docker-compose.yml <<EOF
version: '3'
services:
  sonarqube:
    image: sonarqube:community
    privileged: true
    depends_on:
      - postgres
    environment:
      - "TZ=Europe/Lisbon"
      - "ES_JAVA_HOME=/opt/java/openjdk"
    volumes:
      - ./conf:/opt/sonarqube/conf
      - ./data:/opt/sonarqube/data
      - ./logs:/opt/sonarqube/logs
      - ./extensions:/opt/sonarqube/extensions
    ports:
      - 9000:9000

  postgres:
    image: postgres:12.7
    volumes:
      - ./pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: sonar
      POSTGRES_DB: sonardb
      POSTGRES_PASSWORD: postgrespwd
```

basta correrem o comando:

```bash

$ docker-compose up -d
```

e a aplicação estará a correr. Abram o browser no endereço:

```bash

http://localhost:9000
```

deverão deparar-se com o seguinte ecran

![Sonarqube login page](/assets/blog/images/como-configurar-o-sonarqube-com-docker/login.png)

as credenciais de acesso são:

```
login: admin
password: admin
```

Após fazerem o login, vai-vos ser pedido para actualizarem a password.

Se por algum motivo, tiverem dúvidas ou acontecer algum erro num dos comandos acima, não hesitem a deixar um comentário.
