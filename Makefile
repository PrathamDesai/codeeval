setup-php:
	php -r "readfile('https://getcomposer.org/installer');" | php
	php composer.phar install

setup-ruby:
	which rake 2>/dev/null || gem install rake

setup-js:
	npm install

shunit_url := https://shunit2.googlecode.com/files/shunit2-2.1.6.tgz
setup-sh:
	wget ${shunit_url} 2>/dev/null || curl -O ${shunit_url}
	tar -zxf shunit2-2.1.6.tgz
	rm shunit2-2.1.6.tgz
	mv shunit2-2.1.6 shunit2

test-php:
	php vendor/bin/phpunit --configuration phpunit.xml

test-ruby:
	rake test

test-js:
	./node_modules/.bin/mocha */*/test.js

test-sh:
	find */*/test.sh | while read file; do sh $${file}; done
