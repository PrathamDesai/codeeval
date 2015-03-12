setup-php:
	php -r "readfile('https://getcomposer.org/installer');" | php
	php composer.phar install

setup-ruby:
	which rake 2>/dev/null || gem install rake

test-php:
	php vendor/bin/phpunit --configuration phpunit.xml

test-ruby:
	rake test
