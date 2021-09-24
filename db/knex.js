const knex = require("knex")

const connected = knex({
    client: "sqlite3",
    connection: {
        filename: "database.db"
    },
    useNullAsDefault: true
});

module.exports = connected;