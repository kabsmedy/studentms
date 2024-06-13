// import db config
const dbConfig = require("../config/db.config.js");
// const _Student = require("./student.model.js");
// const _StudentFinance = require("./student.model.js");

const Sequelize = require("sequelize");
const sequelize_config = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }

    }
);

sequelize_config.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const db = {};
db.Sequelize = Sequelize;
db.sequelize_config = sequelize_config;

db.students = require("./student.model.js")(sequelize_config, Sequelize);
db.studentfinances = require("./finance.model.js")(sequelize_config, Sequelize);

// _Student.hasOne(_StudentFinance);

db.students.hasOne(db.studentfinances, {foreignKey: `student_id`});
// db.studentfinances.hasOne(db.students);
// db.students.hasMany(db.studentfinances);

// db.studentfinances.hasOne(db.students);
// db.studentfinances.hasOne(db.students, {foreignKey: `student_id`});
// db.students.hasOne(db.studentfinances);

module.exports = db;
