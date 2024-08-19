---
id: 366
title: Como rejeitar um determinado endereço de email no Postfix
date: "2016-02-17T20:22:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-rejeitar-um-determinado-endereco-de-email-no-postfix/
categories:
  - postfix, reject, centos, redhat, email, debian, ubuntu
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/postfix-logo/12687-1-eng-GB/Postfix-Logo_medium.png" width="200" height="106"  style="border: 0px solid ;" alt="Postfix Logo" title="Postfix Logo" />
      </div>
    </div>
  </div>
</div>

Hoje deixo-vos aqui um pequeno tutorial a explicar como podem adicionar um e-mail especifico a ser ignorado no postfix.

Para isso, é necessário começarem por aceder ao directório

```bash
$ cd /etc/postfix
```

Vamos agora criar o ficheiro sender_access

```bash
$ vi sender_access
```

e lá dentro vamos colocar

```html
<a href="mailto:email-a-ignorar@dominio.com">email-a-ignorar@dominio.com/a> REJECT
```

após guardarem o ficheiro deverão executar o comando

```bash
$ postmap hash:sender_access
```

vamos agora editar o ficheiro principal de configuração do postfix

```bash
$ vi main.cf
```

e na linha que começa com

```bahs
smtp_sender_restrictions =
```

vamos adicionar, como primeira entrada

```bash
check_sender_access hash:/etc/postfix/sender_access
```

por fim, só falta recomeçar o postfix, correndo

```bash
 /etc/init.d/postfix restart
 ```

Agora qualquer e-mail vindo do endereço

```bash
email-a-ignorar@dominio.com
```

será rejeitado.
