---
id: 413
title: Como ligar, exportar e importar uma base de dados de Oracle
date: '2012-11-09T11:44:31+00:00'
author: 
  name: Pedro Resende
layout: post
guid: '<p>Hoje deixo-vos aqui uns comandos que podem vir a dar jeito, se tiverem que trabalhar com Oracle.&nbsp;</p><p>Para se ligarem à base de dados correm o seguinte comando</p>``` sqlplus user/pass@db```<p>caso não saibam o user a pass normalmente o uti'
permalink: /como-ligar-exportar-e-importar-uma-base-de-dados-de-oracle/
categories:
  - tutorial, oracle, dump, export, import, exportar, importar
---
Hoje deixo-vos aqui uns comandos que podem vir a dar jeito, se tiverem que trabalhar com Oracle.&nbsp;

Para se ligarem à base de dados correm o seguinte comando

```bash
sqlplus user/pass@db
```

caso não saibam o user a pass normalmente o utilizador scott e a palavra-chave tiger estão activados por defeito e a base de dados orcl, ou seja, correm o seguinte comando para se ligarem

```bash
sqlplus scott/tiger@orcl
```

Este é o comando básico, passemos agora para a parte do exportar uma base de dados.

```bash
exp user/pass@db FULL=Y PATH=/...
```

e o caso de importar

```bash
imp user/pass@db FULL=Y PATH=/...
```

Ficam então aqui algumas dicas do Oracle