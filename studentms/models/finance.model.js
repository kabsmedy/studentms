module.exports = (sequelize_config, Sequelize) => {
    const _Student = require("./student.model");
    const Studentfinance = sequelize_config.define("studentfinance", {
        finance_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        student_id: { type: Sequelize.INTEGER, 
                      allowNull: false, 
                      reference: {
                        model: _Student,
                        key: 'student_id'
                      }
                    },
        school_fees_amount: { type: Sequelize.INTEGER, allowNull: false},
    });

    return Studentfinance;
}