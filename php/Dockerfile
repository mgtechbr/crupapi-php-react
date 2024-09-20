FROM php:8.1-apache

# Instala extensões PHP necessárias
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Instala Composer globalmente
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Habilita mod_rewrite para o Laravel
RUN a2enmod rewrite

WORKDIR /var/www/html
