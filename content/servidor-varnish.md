---
id: 576
title: Servidor Varnish
date: "2012-09-06T19:37:11+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /servidor-varnish/
categories:
  - Apache2, php, Ubuntu, Varnish, linux, PHP, Tutorial
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/varnish2/11421-1-eng-GB/Varnish_medium.jpg" width="200" height="200"  style="border: 0px solid ;" alt="Varnish" title="Varnish" />
      </div>
    </div>
  </div>
</div>

Para quem não sabe o que é, trata-se de um “acelerador” de aplicações web, por outras palavras é um servidor de “cache” em que guarda em memoria as páginas consultadas o que reduz bastante os acessos ao disco o que proporciona um aumento de velocidade considerável.

Podem ler um pouco mais em <a href="https://www.varnish-cache.org/" title="https://www.varnish-cache.org/" target="_blank">https://www.varnish-cache.org/</a>

Vamos então começar pela instalação, para isso é necessário começar por se instalar o servidor _varnish_ através do comando

```basg
$ sudo apt-get install varnish
```

Agora, vamos ter de alterar as configurações do _varnish_ para estar entre o servidor web, neste caso o apache, e o cliente. Para isso vamos dizer ao _varnish_ para “ouvir” a porta 80. basta então edirar o ficheiro “/etc/default/varnish” e onde está \*:6081 alterar para \*:80

Vamos colocar as novas configurações do _varnish_ no ficheiro vlc, para isso corram os seguintes comandos

```basg
$ cd /etc/varnish

$ sudo mv default.vlc default.vlc.bck

$ sudo vi default.vlc
```

Adicionem então a seguinte configuração:

```bash
## Redirect requests to Apache, running on port 8000 on localhost
backend apache {
.host = “127.0.0.1″
.port = “8000″
}
## Fetch
sub vcl_fetch {
## Remove the X-Forwarded-For header if it exists.
remove req.http.X-Forwarded-For;

## insert the client IP address as X-Forwarded-For. This is the normal IP address of the user.
set req.http.X-Forwarded-For = req.http.rlnclientipaddr;
## Added security, the “w00tw00t” attacks are pretty annoying so lets block it before it reaches our webserver
if (req.url ~ “^/w00tw00t”) {
error 403 “Not permitted”
}
## Deliver the content
return(deliver);
}

## Deliver
sub vcl_deliver {
## We’ll be hiding some headers added by Varnish. We want to make sure people are not seeing we’re using Varnish.
## Since we’re not caching (yet), why bother telling people we use it?
remove resp.http.X-Varnish;
remove resp.http.Via;
remove resp.http.Age;

## We’d like to hide the X-Powered-By headers. Nobody has to know we can run PHP and have version xyz of it.
remove resp.http.X-Powered-By;
}
```

Uma vez alteradas as configurações do _varnish_, vamos reinica-lo correndo:

```bash
$ sudo /etc/init.d/varnish restart
```

Vamos agora configurar o apache para “ouvir” a porta do varnish e não a do utilizador, para isso alteramos o ficheiro “/etc/apache2/ports.conf” e onde temos

```
NameVirtualHost *:80
Listen 80
```

substitui-se por

```
NameVirtualHost *:8000
Listen 127.0.0.1:8000
```

Por fim, entramos no directório das configurações do apache “/etc/apache2/sites-enabled” e é necessário alterar cada um dos ficheiros, o que temos

```
<VirtualHost *:80>
```

por

```
<VirtualHost *:8000>
 ```

Por fim, vamos reiniciar o apache com

```bash
$ /etc/init.d/apache2 restart
```

e está feito, como podem ver nada do outro mundo .
