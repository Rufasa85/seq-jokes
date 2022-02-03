const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Joke extends Model {}

Joke.init({
    // add properites here, ex:
    setup: {
         type: DataTypes.STRING,
         allowNull:false
    },
    punchline: {
         type: DataTypes.STRING,
         allowNull:false
    }
},{
    sequelize
});

module.exports=Joke