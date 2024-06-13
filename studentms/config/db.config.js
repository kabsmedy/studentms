module.exports = {
    HOST: "localhost", // host name
    USER: "root", // username
    PASSWORD: "", // user password
    DB: "medy", // database name
    dialect: "mysql",
    pool: {
        // maximum number of connections in pool
        max: 5,
        // minimum number of connections in pool
        min: 0,
        // maximum time, in milliseconds, that the pool will try to get connection
        acquire: 30000,
        // maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000
    }
}