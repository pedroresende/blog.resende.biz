---
id: 666
title: Como Corrigir o Problema da Cédilha em teclado US-international no KDE
date: 2026-04-16T07:20:00+00:00
author:
  name: Pedro Resende
layout: post
permalink: /como-corrigir-o-problema-da-c-cedilha-no-kde/
coverImage: /assets/blog/images/como-corrigir-o-problema-da-c-cedilha-no-kde/kde.webp
categories:
  - linux
  - bluetooth
tags:
  - linux
  - bluetooth
---

Vou-vos deixar aqui um pequeno tutorial sobre como corrigir o problema da cédilha no teclado US-international no KDE.

Para resolver o problema basta editar o arquivo ~/.XCompose com o seguinte conteúdo:

```bash
include "%S/en_US.UTF-8/Compose"
<dead_acute> <C> : "Ç"
<dead_acute> <c> : "ç"
```

Basta fazerem logout e voltar para o KDE para que o problema seja corrigido.
