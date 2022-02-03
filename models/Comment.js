const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    // add properites here, ex:
     body: {
         type: DataTypes.TEXT
    }
},{
    sequelize
});

module.exports=Comment