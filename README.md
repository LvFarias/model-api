# Model API
![](https://img.shields.io/github/package-json/v/LvFarias/model-api/main?style=flat-square)
![](https://img.shields.io/github/license/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/repo-size/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/issues/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/issues-closed-raw/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/issues-pr/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/contributors/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/commit-activity/m/LvFarias/model-api?style=flat-square)
![](https://img.shields.io/github/last-commit/LvFarias/model-api/main?style=flat-square)
![](https://img.shields.io/github/forks/LvFarias/model-api?style=social)
![](https://img.shields.io/github/stars/LvFarias/model-api?style=social)
![](https://img.shields.io/github/watchers/LvFarias/model-api?style=social)

## Sumary

- [Description](#description)
- [Getting Started](#getting-started)
- [Seeders and Migrations](#seeders-and-migrations)
  - [Seeders](#seeders)
  - [Migrations](#migrations)
- [Build or Run](#build-or-run)
  - [To Local](#to-local)
  - [To Homolog](#to-homolog)
  - [To Production](#to-production)
- [Authors](#authors)

## Description

Template for basic API for sites with Universal Angular and CMS management.

## Getting Started

Install dependences:
```
npm i
```

Up Docker Container to run Database:
```
npm run init-db
```
PS: this command run seeders and migrations;

## Seeders and Migrations
### Seeders

Run seeder table using: `npx sequelize db:seed:TABLE_NAME`
```
npx sequelize db:seed:users
```

Or run all seeders:
```
npm run seed
```

### Migrations

Run all migrations:
```
npm run migrate
```

Run undo all migrations:
```
npm run migrate:undo
```

## Build or Run
### To Local

```
npm run local
```

### To Homolog

```
npm run stage
```

### To Production

```
npm run prod
```

## Authors

- [Luan Vasco de Farias](https://github.com/LvFarias)
