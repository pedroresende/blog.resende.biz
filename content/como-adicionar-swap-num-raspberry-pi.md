---
id: 59
title: Como adicionar uma partição de swap num Raspberry Pi
date: "2022-04-19T13:50:00+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-adicionar-swap-num-raspberry-pi/
coverImage: "/assets/blog/images/como-adicionar-swap-num-raspberry-pi/swap.webp"
categories:
  - Personal
  - DevOps
tags:
  - swap
  - raspberry pi
---

Hoje deixo-vos aqui um pequeno tutorial a explicar como adicionar uma partição de swap num Raspberry Pi.

Para quem não sabe, uma partição de swap é uma partição de memória que é usada para armazenar dados temporários, como arquivos temporários, dados temporários, dados de sessão, dados de cache, etc.

Vamos começar por criar o ficheiro responsável por adicionar a partição de swap.

```bash
$ sudo fallocate -l 2G /swapfile
```

o 2G é o tamanho da partição de swap, escolhi 2G porque é o dobro to tamanho disponível que tenho em memória Ram.

Vamos mudar as permissões de acesso ao ficheiro criado para prevenir que utilizadores comuns possam aceder ao ficheiro.

```bash
$ sudo chmod 600 /swapfile
```

Para criar a partição de swap, temos que executar o seguinte comando:

```bash
$ sudo mkswap /swapfile
```

Vamos então activar a partição de swap:

```bash
$ sudo swapon /swapfile
````

poderão verificar se a partição de swap foi criada e activada com o seguinte comando:

```bash
$ sudo swapon -s
```

```bash
Filename            Type   Size  Used	Priority
/swapfile           file    2G    0B   -1
```

Para torná-la permanente, têm de aceder ao ficheiro `/etc/fstab` e adicionar a partição de swap ao ficheiro.

```bash
$ sudo nano /etc/fstab
```

e adicionar

```bash
/swapfile swap swap defaults 0 0
```

Básicamente é isto, se tiverem algum problema ou dúvida, não hesitem em deixar um comentário.