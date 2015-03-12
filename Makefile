setup-php:
	php -r "readfile('https://getcomposer.org/installer');" | php
	php composer.phar install

test-php:
	php vendor/bin/phpunit --configuration phpunit.xml
