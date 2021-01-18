# Setup

Ensure `npm install -g sequelize-cli` for global install. Then:

```
npm init
npm install --save sequelize
npm install --save pg pg-hstore
sequelize init
```

Configure `config.json` accordingly.


# Models & migrations
```
sequelize db:create
sequelize model:generate --name Book --attributes title:string,author:string,price:double
sequelize model:generate --name Author --attributes firstName:string,lastName:string,avatarUrl:string
sequelize seed:generate --name demo-author
sequelize db:migrate
```


# Problems I had:
1. database does not exist. Run `sequelize db:create`.


# Questions I had:
1. Sequelize docs generate db fields in camelCase. Don't think that's ideal.


# Considerations:
1. Sequelize generated seed file has no instructions on how to revert seed.