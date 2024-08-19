---
id: 391
title: Como instalar um servidor de OpenVPN em Linux
date: "2013-11-21T18:52:03+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-um-servidor-de-openvpn-em-linux/
categories:
  - OpenVPN, VPN, VPN Server, linux, Tutorial, Ubuntu, Debian
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/openvpn-logo/12086-1-eng-GB/OpenVPN-Logo_large.png" width="359" height="65"  style="border: 0px solid ;" alt="OpenVPN Logo" title="OpenVPN Logo" />
      </div>
    </div>
  </div>
</div>

Hoje, vou-vos ensinar a instalar um servidor de OpenVPN em Linux em poucos passos.

Vamos começar por actualizar a base de dados dos pacotes, através do seguinte comando:

```bash
 apt-get update
 ```

Uma vez actualizada a lista, vamos então proceder a instalação propriamente dita. Vamos então digitar o seguinte comando:

```bash
 apt-get install openvpn openssl
 ```

Uma vez instalado, vamos proceder à configuração do mesmo

```$ cd /etc/openvpn

# &lt;em&gt;cp -r /usr/share/doc/openvpn/examples/easy-rsa/2.0 ./easy-rsa

# vi easy-rsa/vars
```

Substituam o conteúdo da linha 16

```export EASY_RSA="`pwd`"```

por&nbsp;

```export EASY_RSA="/etc/openvpn/easy-rsa"```

para isso, necessitam carregar na tecla "i" para poderem começar a introduzir texto.

Uma vez alterado, primam a seguinte sequência para salvar o conteúdo e sair "ESC" e depois :wq"

Vamos agora definir a origem dos conteúdos

```bash
 . ./easy-rsa/vars
 ```

vamos então limpar

```bash
 ./easy-rsa/clean-all
 ```

Vamos agora fazer um symlink&nbsp;

```bash
 ln -s openssl-1.0.0.cnf openssl.cnf
 ```

Para gerarmos os certificados de segurança é então e necessário

```bash
 cd ..

# ./easy-rsa/build-ca OpenVPN

# ./easy-rsa/build-key-server server

# ./easy-rsa/build-key client1
```

Por fim,

```bash
 ./easy-rsa/build-dh
 ```

Vamos então especificar as configurações dentro do openvpn.conf

```bash
 vi openvpn.conf
 ```

em que o conteúdo é

```dev tun
proto udp
port 1194
ca /etc/openvpn/easy-rsa/keys/ca.crt
cert /etc/openvpn/easy-rsa/keys/server.crt
key /etc/openvpn/easy-rsa/keys/server.key
dh /etc/openvpn/easy-rsa/keys/dh1024.pem
user nobody
group nogroup
server 10.8.0.0 255.255.255.0
persist-key
persist-tun
status /var/log/openvpn-status.log
verb 3
client-to-client
push “redirect-gateway def1"
#set the dns servers
push “dhcp-option DNS 8.8.8.8"
push “dhcp-option DNS 8.8.4.4"
log-append /var/log/openvpn
comp-lzo
```

Vamos activar o redireccionamento

```bash
 echo 1 &gt; /proc/sys/net/ipv4/ip_forward
 ```

Por fim iniciamos o serviço

```bash
 service openvpn start
 ```

Falta-nos apenas a configuração para o cliente ligacao.openvpn

```bash
 vi ligacao.openvpn
 ```

com o conteúdo

```bash
dev tun
client
proto udp
remote &lt;strong&gt;IP_DO_SERVIDOR&lt;/strong&gt; 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client1.crt
key client1.key
comp-lzo
verb 3
```

Não se esqueçam de mudar o **IP_DO_SERVIDOR**, pelo ip ou pelo domínio do mesmo.

Copiem os certificados que estão em&nbsp;**/etc/openvpn/easy-rsa/keys**.

Para o cliente necessitam apenas de usar os seguintes ficheiros:

- **ca.crt;**
- **client1.crt;**
- **client1.key e&nbsp;**
- **ligacao.openvpn.**

Para estabelecerem a ligação a partir do cliente basta correrem

```bash
 openvpn ligação.openvpn
 ```

E pronto,&nbsp;já têm o servidor VPN, usando o OpenVPN, a funcionar.
