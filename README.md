
# MWC 2024 Open Gateway Hackathon - UDE Group Backend

## Description

This is the backend for the Hackathon.

## Stack

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
PostgreSQL  
TypeORM  
Swagger  
Nokia Network as Code  

## Installation

```bash
$ yarn install
```

## Database Set Up

```bash
# run containers with docker
$ docker compose up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Info

App is running at localhost:3000.
Swagger is running at localhost:3000/api.
pgAdmin is running at localhost:5050 (info in the docker-compose.yml).
