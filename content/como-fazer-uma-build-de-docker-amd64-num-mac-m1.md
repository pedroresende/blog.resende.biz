---
id: 59
title: Como fazer uma build de docker amd64 num mac m1
date: "2022-03-15T10:35:00+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-fazer-uma-build-de-docker-amd64-num-mac-m1/
coverImage: "/assets/blog/images/como-fazer-uma-build-de-docker-amd64-num-mac-m1/m1.webp"
categories:
  - Personal
  - DevOps
tags:
  - mac m1
  - docker
  - docker build
---

Hoje deixo-vos aqui um pequeno tutorial a explicar como fazer uma build de uma imagem Docker, num mac m1 que seja possível executar um processador x86.

Normalmente para fazer uma build de uma imagem docker, corremos o seguinte comando:

```bash

$ docker build -t nome_da_image .
```

que vai gerar uma imagem docker com o nome nome_da_image.

O único problema, é no caso de uma mac m1 ele vai gerar uma imagem para ser apenas executada em processadores arm e não x86. Podem ver [aqui](https://www.section.io/engineering-education/arm-x86/) as diferenças em termos de arquitectura.

Por isso, é necessário passar um comando extra para que a imagem seja criada para um processador x86.

```bash

--platform linux/amd64
```

Ou seja, para gerar uma imagem docker para um processador x86, temos que executar o seguinte comando:

```bash

$ docker build --platform linux/amd64 -t whatever_tag_name .
```