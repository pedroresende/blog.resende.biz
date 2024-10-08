---
id: 387
title: 'Como actualizar um "fork" de um repositório de github'
date: '2014-01-17T13:55:00+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Vamos começar por fazer um clone de um repositório que tenha sido feito um &quot;fork&quot;.&nbsp;</p>```$ git clone git@github.com:nome/repositorio-forked.git```<p>Entrem dentro do directório</p>```$ cd repositorio-forked```<p>Vamos então ad'
permalink: /como-actualizar-um-fork-de-um-repositorio-de-github/
categories:
  - Git, fork, pull, push, merge, clone, remote, add, track, master, origin, github
---
Vamos começar por fazer um clone de um repositório que tenha sido feito um "fork".&nbsp;

```bash

$ git clone git@github.com:nome/repositorio-forked.git
```

Entrem dentro do directório

```bash

$ cd repositorio-forked
```

Vamos então adiconar o repositório origina, aquela em que fizemos o "fork" como sendo remoto

```bash

$ git remote add --track master original-location git@github.com:nome/repositorio-original.git
```

Uma vez adicionado, vamos buscar as últimas alterações do repositório original

```bash

$ git fetch original-location
```

Vamos então fazer o "merge" do original com o nosso local

```bash

$ git merge original-location/master
```

Por fim, fazemos um push do actualizado para o github

```bash

$ git push 
```

Done !