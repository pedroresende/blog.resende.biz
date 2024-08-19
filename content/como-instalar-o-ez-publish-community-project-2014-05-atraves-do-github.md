---
id: 378
title: Como instalar o eZ Publish Community Project 2014.05 através do Github
date: "2014-07-06T12:16:00+00:00"
author:
  name: Pedro Resende
layout: post
guid: |
  <div class="object-center"><div class="content-view-embed">
  <div class="class-image">
  <div class="attribute-image">
permalink: /como-instalar-o-ez-publish-community-project-2014-05-atraves-do-github/
categories:
  - git, Community, 2014.05, github, clone, eZ, Publish, eZ Publish Community Project 2014.05, composer
---

<div class="object-center">
  <div class="content-view-embed">
    <div class="class-image">
      <div class="attribute-image">
      <img src="https://blog.resende.biz/assets/blog/ezdemo_site/storage/images/media/images/github/12116-1-eng-GB/Github_medium.jpg" width="200" height="200"  style="border: 0px solid ;" alt="Github" title="Github" />
      </div>
    </div>
  </div>
</div>

Hoje deixo-vos aqui um pequeno tutorial de como instalar o eZ Publish Community Project 2014.05 através do <a href="http://www.github.com" target="_blank">Github</a>, uma vez que ainda não se encontra disponível no <a href="http://blog.resende.biz/share.ez.no" target="_blank">share.ez.no</a>.

Vamos começar por clonar o repositório do ezpublish-community

```bash
$ git clone git@github.com:ezsystems/ezpublish-community.git ezpublish
```

de seguida, vamos fazer o checkout para a release 2014.05

```bash
$ cd ezpublish
$ git checkout tags/v2014.05.1
```

vamos agora buscar o composer, correndo

```bash
$ curl -sS https://getcomposer.org/installer | php
```

Instalar todas as dependências

```bash
$ php -d memory_limit=-1 composer.phar install --prefer-dist
```

Vamos então dar as permissões necessárias

```bash
$ sudo chown -R www-data:www-data ezpublish/{cache,logs,config,sessions} ezpublish_legacy/{design,extension,settings,var} web
$ sudo find {ezpublish/{cache,logs,config,sessions},ezpublish_legacy/{design,extension,settings,var},web} -type d | sudo xargs chmod -R 775
$ sudo find {ezpublish/{cache,logs,config},ezpublish_legacy/{design,extension,settings,var},web} -type f | sudo xargs chmod -R 664
```

Pronto, como podem ver não custa nada
