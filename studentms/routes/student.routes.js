module.exports = app => {

    // importing the controller logic for the student model
    const student_controller = require("../controllers/student.controller");

    // importing Router interface from Express module
    var router = require("express").Router();

    // route to get all student in our database
    router.put("/update/:id", student_controller.UpdateStudent);
    // http://localhost:8080/api/students/update/1

    // route to get all student in our database
    router.get("/r", student_controller.GetAllStudents);

    // route to find a specific student by ID - GET
    router.get("/find/:id", student_controller.GetStudentByID);

    router.post("/findStudent", student_controller.GetStudentByIDPost);

    router.post("/create", student_controller.CreateStudent);

    // deletes a student by id
    router.post("/delete", student_controller.DeleteStudent);

    // search a student by string
    router.get("/search", student_controller.SearchStudent);

    // search a student by string
    router.get("/fees-range", student_controller.ListRange);

    // Defining API Root URL
    app.use('/api/students', router);

}