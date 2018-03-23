stop:
	docker-compose down

setup:
	docker-compose build

test:
	docker-compose run --rm web yarn test

storybook:
	docker-compose run --rm web yarn storybook

start:
	docker-compose run --rm --service-ports web
