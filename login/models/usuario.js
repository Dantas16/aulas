const { DataTypes } = require('sequelize');

const Usuario = (conexao) => {
    return conexao.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logado: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    }, {
        // Other model options go here
        tableName: 'usuario',
        timestamps: false
    });
}

module.exports = { Usuario };