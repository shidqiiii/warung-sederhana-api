require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME, DB_HOST, DB_DIALECT } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
    },
};
