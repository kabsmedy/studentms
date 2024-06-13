// import modules

// building REST APIs
const express = require("express");

// helps to parse the reques and create the req.body object
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// importing models
const db = require("./models");

// Sync the database with Sequelize ORM
db.sequelize_config.sync(
    {force: false}
).then(() => 
{
    console.log("DB re-synced")
});

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to Student MS"});
});

// business logic sample
app.post("/sum", (req, res) => {
    const number1 = parseInt(req.body.number_1);
    const number2 = parseInt(req.body.number_2);

    console.log("Number 1 is "+ req.body.number_1);
    // console.log("Number 1 is "+ number1);

    // res.json({result: `Sum is ${number1 + number2}`});
    res.json({result: number1 + number2});

});

// import routes
require("./routes/student.routes")(app);

// setting a Port number for our backend.
const PORT = 8094;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT} `);
});

