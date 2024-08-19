---
id: 589
title: Como instalar o Ruby On Rails no Mac OS Sonoma
date: "2023-12-01T23:16:00+00:00"
author:
  name: Pedro Resende
layout: post
permalink: /como-instalar-o-ruby-on-rails-no-mac-sonoma/
coverImage: "/assets/blog/images/como-instalar-o-ruby-on-rails-no-mac-sonoma/ror.png"
categories:
  - Personal
  - Software
tags:
  - rails
  - ruby
  - ror
---

Hoje deixo-vos aqui um pequeno tutorial a explicar como instalar o ruby e o rails no mac os sonoma.

Abram o terminal e comecem por instalar o rvm (Ruby Version Manager)

```bash
# curl -sSL https://get.rvm.io | bash -s stable
```

Uma vez instalado basta-vos correr o seguinte:

```bash
rvm install 3.2.2 --with-openssl-dir=/usr/bin/openssl
```

deverão ver o seguinte no ecran

```bash
ruby-3.2.2 - #removing src/ruby-3.2.2 - please wait
Checking requirements for osx.
Certificates bundle '/opt/homebrew/etc/openssl@1.1/cert.pem' is already up to date.
Requirements installation successful.
Installing Ruby from source to: /Users/pedroresende/.rvm/rubies/ruby-3.2.2, this may take a while depending on your cpu(s)...
ruby-3.2.2 - #downloading ruby-3.2.2, this may take a while depending on your connection...
ruby-3.2.2 - #extracting ruby-3.2.2 to /Users/pedroresende/.rvm/src/ruby-3.2.2 - please wait
ruby-3.2.2 - #configuring - please wait
ruby-3.2.2 - #post-configuration - please wait
ruby-3.2.2 - #compiling - please wait
ruby-3.2.2 - #installing - please wait
ruby-3.2.2 - #making binaries executable - please wait
Installed rubygems 3.4.10 is newer than 3.0.9 provided with installed ruby, skipping installation, use --force to force installation.
ruby-3.2.2 - #gemset created /Users/pedroresende/.rvm/gems/ruby-3.2.2@global
ruby-3.2.2 - #importing gemset /Users/pedroresende/.rvm/gemsets/global.gems - please wait
ruby-3.2.2 - #generating global wrappers - please wait
ruby-3.2.2 - #gemset created /Users/pedroresende/.rvm/gems/ruby-3.2.2
ruby-3.2.2 - #importing gemsetfile /Users/pedroresende/.rvm/gemsets/default.gems evaluated to empty gem list
ruby-3.2.2 - #generating default wrappers - please wait
ruby-3.2.2 - #adjusting #shebangs for (gem irb erb ri rdoc testrb rake).
Install of ruby-3.2.2 - #complete
Ruby was built without documentation, to build it run: rvm docs generate-ri
```

Para instalar o rail, corram então

```bash
gem install rails
```

e é isso.
