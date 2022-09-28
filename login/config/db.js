const { Sequelize } = require('sequelize');

// URL de conexão: drive://usuario:senha@localdobanco:porta/database

const conectar = async () => {
    try {
        const sequelize = new Sequelize('mysql://root:root@localhost:3306/escola');
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

module.exports = { conectar };
