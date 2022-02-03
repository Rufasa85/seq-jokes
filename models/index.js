const Joke = require("./Joke");
const User = require("./User");
const Comment = require("./Comment");

Joke.belongsTo(User);
User.hasMany(Joke);

Comment.belongsTo(Joke);
Comment.belongsTo(User);
Joke.hasMany(Comment);
User.hasMany(Comment);
console.log("hello from models index!")
module.exports= {
    Joke:Joke,
    User:User,
    Comment:Comment
}