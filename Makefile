install: # Установка зависимостей
	npm ci

brain-games: # Запуск проекта
	node bin/brain-games.js

publish: # Публикация пакета
	npm publish --dry-run
