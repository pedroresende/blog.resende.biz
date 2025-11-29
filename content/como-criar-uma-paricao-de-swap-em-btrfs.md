---
id: 665
title: Como criar uma Parição de swap em btrfs
date: 2025-11-29T17:30:00+00:00
author:
  name: Pedro Resende
layout: post
permalink: /como-criar-uma-paricao-de-swap-em-btrfs/
coverImage: /assets/blog/images/como-criar-uma-paricao-de-swap-em-btrfs/btrfs.webp
categories:
  - linux
  - btrfs
tags:
  - linux
  - btrfs
---

Hoje vou-vos ensinar como criar uma paricao de swap em btrfs.

Vamos então começar, por fazer mount do nosso btrfs, para tal vamos executar o seguinte comando:

```zsh
sudo mount /dev/nvmen1p1 /mnt
```

Vamos verificar se está ok, executando:

```bash
ls /mnt
```

Em principio terão de ver o seguinte resultado:

```bash
@
@home
```

Para tal, vamos primeiro criar um novo subvolume, no meu caso, um btrfs, com o seguinte comando:

```bash
sudo btrfs sub create /mnt/@swap
```

Se voltarem a listar o nosso diretório, teremos o seguinte resultado:

```bash
@
@home
@swap
```

Vamos agora criar a partição de swap, para tal vamos executar o seguinte comando:

```bash
sudo mkdir /swap
sudo mount -o subvol=@swap /dev/nvmen1p1 /swap
sudo touch /swap/swapfile
```

Vamos agora corrigir o permisão do nosso arquivo, para tal vamos executar o seguinte comando:

```bash
sudo chmod 600 /swap/swapfile
```

Vamos desativar o COW, para tal vamos executar o seguinte comando:

```bash
sudo chattr +C /swap/swapfile
```

Vamos definir o tamanho da nossa swap, que será de 16 GB, para tal vamos executar o seguinte comando:

```bash
sudo fallocate -l 16G /swap/swapfile
```

Para formatar a nossa swap, vamos executar o seguinte comando:

```bash
sudo mkswap /swap/swapfile
```

Agora, vamos ativar a swap, para tal vamos executar o seguinte comando:

```bash
sudo swapon /swap/swapfile
```

Pronto, agora temos a nossa swap criada e ativada.

Vamos verificar se está ok, executando:

```bash
swapon -s
```

E teremos o seguinte resultado:

```bash
Filename                                Type            Size    Used    Priority
/swap/swapfile                           partition       16.0G   0.0B    -1
```

Pronto, agora temos a nossa swap criada e ativada.

Por fim, vamos editar o arquivo /etc/fstab, para tal vamos executar o seguinte comando:

```bash
sudo nano /etc/fstab
```

Vamos verificar o UUID do nosso dispositivo, para tal vamos executar o seguinte comando:

```bash
blkid
```

que deverá retornar o seguinte resultado:

```bash
/dev/nvmen1p1: UUID="c1d0d5d3-c5c3-4e4d-b1c2-d1d2d3d4d5d6" TYPE="btrfs"
```

E adicionando o seguinte conteúdo:

```bash

/dev/disk/by-uuid/c1d0d5d3-c5c3-4e4d-b1c2-d1d2d3d4d5d6 /swap btrfs defaults,subvol=@swap 0 0
/swap/swapfile none swap sw 0 0
```

Agora, vamos reiniciar o servidor, para tal vamos executar o seguinte comando:

```bash
sudo reboot
```

Pronto, agora temos a nossa swap criada e ativada.
