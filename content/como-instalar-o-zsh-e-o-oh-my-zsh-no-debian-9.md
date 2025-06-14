---
id: 650
title: Como instalar o ZSH e o Oh-my-zsh no Debian 9
date: 2019-02-21T10:30:52+00:00
author:
  name: Pedro Resende
layout: post
guid: http://blog.resende.biz/?p=650
permalink: /como-instalar-o-zsh-e-o-oh-my-zsh-no-debian-9/
coverImage: /assets/blog/images/como-instalar-o-zsh-e-o-oh-my-zsh-no-debian-9.png
categories:
  - zsh
tags:
  - oh-my-zsh
  - zsh
---

Hoje vou-vos deixar aqui um pequeno tutorial a explicar como podem instalar o [ZSH](https://en.wikipedia.org/wiki/Z_shell) (Z Shell) no terminal. 
Para quem não sabe o que é o o ZSH, devem saber que se trata de uma shell um pouco diferente do tão bem conhecido bash, consola por defeito instalada na maioria dos sistemas linux.

Vamos começar por actualizar os repositórios de pacotes de linux

```bash
# apt update
```

De seguida vamos instalar os pacotes necessários para ter o zsh

```bash
# apt install zsh curl git
```

Uma vez instalados os pacotes, temos de definir o zsh, como a shell predefinida, para temos temos de executar

```bash
chsh -s $(which zsh)
```

Vamos agora instalar o [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh){ariaLabel="oh-my-zsh (abre num novo separador)"}, que se trata de temas para a shell.

```bash

sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Por fim, para activar a nova shell basta-nos fazer logout e depois login, para fazerem logout podem premir as teclas Ctrl + D.

Depois de fazerem login terão o zsh pronto a funcionar.
