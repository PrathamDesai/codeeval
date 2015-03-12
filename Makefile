setup-php:
	php -r "readfile('https://getcomposer.org/installer');" | php
	php composer.phar install

setup-ruby:
	which rake 2>/dev/null || gem install rake

setup-js:
	npm install

test-php:
	php vendor/bin/phpunit --configuration phpunit.xml

test-ruby:
	rake test

test-js:
	./node_modules/.bin/mocha */*/test.js
