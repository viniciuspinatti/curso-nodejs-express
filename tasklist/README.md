# What is this?

This folder has a project related to nodejs studies. It is an example of API written in nodejs about a task list with jwt sessions for users and relational DB (postgres).

## How to run?

Created using nodejs 12.x (lts/erbium). You can install this specific version with [nvm](https://github.com/nvm-sh/nvm)

After install nodejs 12.x, you need to install yarn `npm i --global yarn`

You can create a postgres server in your local machine or user the docker-compose.yml (recommended) file to create a container for the database. If you choose docker, just run on terminal:

```
docker compose up
```

### Install the packages and perform database migrations

```
yarn install
yarn sequelize db:migrate
```

### Running application locally

```
yarn dev
```
