---
id: 666
title: Como Configurar o Bluetooth em Linux se Está Sempre a Perder a Ligação
date: 2025-12-08T11:20:00+00:00
author:
  name: Pedro Resende
layout: post
permalink: /como-configurar-o-bluetooth-em-linux-se-estiver-sempre-a-perder-a-ligacao/
coverImage: /assets/blog/images/como-configurar-o-bluetooth-em-linux-se-estiver-sempre-a-perder-a-ligacao/bluetooth.webp
categories:
  - linux
  - bluetooth
tags:
  - linux
  - bluetooth
---

Vou-vos deixar aqui um pequeno tutorial sobre como configurar o Bluetooth em Linux se estiver sempre a perder a ligação ou demorar bastante para se conectar.

Comecei a ter este problema, cada vez que saia de modo de suspensão, ou se reiniciava, o teclado bluetooth não funcionava ou demorava bastante para se conectar.

Vamos então editar o ficheiro /etc/bluetooth/main.conf, para tal vamos executar o seguinte comando:

```bash
sudo vi /etc/bluetooth/main.conf
```

Vão até à secção [Policy] e procurem por `#ReconnectAttempts=3` e altererem por `ReconnectAttempts=7`.

Na mesma secção, procurem por `#ReconnectInterval=1,2,4,8,16,32,64` e alterem por `ReconnectInterval=1,2,4,8,16,32,64`.

Salvem o ficheiro e reiniciem o computador.

Pronto, agora o Bluetooth deverá funcionar sempre.
