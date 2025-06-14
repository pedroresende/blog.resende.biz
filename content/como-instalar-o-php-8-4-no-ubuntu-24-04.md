---
id: 665
title: Como instalar o PHP 8.4 no Ubuntu 24.04
date: 2024-12-01T18:40:00+00:00
author:
  name: Pedro Resende
layout: post
permalink: /como-instalar-o-php-8-4-no-ubuntu-24-04/
coverImage: /assets/blog/images/como-instalar-o-php-8-4-no-ubuntu-24-04/php.png
categories:
  - ubuntu
  - php
  - Uncategorized
tags:
  - ubuntu
  - php
---

Para poderem ter o php 8.4 no Ubuntu 24.04, terão de utilizar um repositório de terceiros, neste caso do [ondrej](https://launchpad.net/~ondrej/+archive/ubuntu/php){.underline}.

Vamos então começar, para tal vamos actualizar a lista de repositórios, executando:

```bash
# apt-get update
```

Agora, vamos instalar os pacotes necessários, correndo o seguinte commando:

```bash
# apt-get install ca-certificates apt-transport-https software-properties-common
```

Estamos então em condições para adicionar o novo repositório:

```bash
# add-apt-repository ppa:ondrej/php
```

Agora basta-nos actualizar novamente a lista de repositório e instalar a versão do php:

```bash
# apt-get update && apt-get install php8.4
```

Pronto, temos então a versão 8.4 do php instalada no nosso servidor.
