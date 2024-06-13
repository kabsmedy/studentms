module.exports = (sequelize_config, Sequelize) => {
    const Student = sequelize_config.define(`student`, {
        student_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        first_name: { type: Sequelize.STRING, allowNull: false},
        last_name: { type: Sequelize.STRING, allowNull: false},
        gender: { type: Sequelize.ENUM('M', 'F'), allowNull: false},
        class: { type: Sequelize.STRING },
        physical_address: { type: Sequelize.STRING, defaultValue: 'Kampala' },
        status: { type: Sequelize.BOOLEAN },
    });

    return Student;
}