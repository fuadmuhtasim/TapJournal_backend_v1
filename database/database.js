const {Pool} = require('pg');

const pool = new Pool({
    user: "fmuhtasim",
    password: "123",
    host: "localhost",
    port: 5432,
    database: "tap_journal",
    max: 10,
    idleTimeoutMillis: 30000
});

module.export = pool;