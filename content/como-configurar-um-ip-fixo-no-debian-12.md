---
id: 588
title: Como configurar um IP fixo no Debian 12
date: "2023-06-10T18:39:00+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-configurar-um-ip-fixo-no-debian-12/
coverImage: "/assets/blog/images/como-configurar-um-ip-fixo-no-debian-12/debian-12.png"
categories:
  - Personal
  - Software
tags:
  - debian
  - ip fixo
  - server
---

Hoje deixo-vos aqui um pequeno tutorial a explicar como configurar um ip fixo, no novíssimo Debian 12, que foi lançado hoje.

Vamos começar por editar o seguinte ficheiro

```bash

# nano /etc/network/interfaces
```

Partindo do principio que a máquina se encontra na gama de ip's 192.168.0.x, vamos então proceder à atribuição do IP 192.168.0.250. Para tal, é necessário adicionar ao ficheiro, o seguinte:

```bash

auto eth0
iface eth0 inet static
  address 192.168.0.250/24
  netmask 255.255.255.0
  gateway 192.168.0.254
  dns-nameservers 8.8.4.4 8.8.8.8
```

vamos agora testar as configurações, correndo o comando

```bash

# systemctl restart NetworkManager
```

e é isso.
