const db = require("../config/connection.js");
const {User,Joke,Comment} = require("../models")

const start = async () => {
  await db.sync({ force: true });
  await User.bulkCreate([
    {
      name: "Joe Rehfuss",
      email: "Joe@joe.joe"
    },
    {
      name: "Louis Coleman",
      email: "louis@joe.joe"
    },
    {
      name: "Brett Belka",
      email: "brett@joe.joe"
    }
  ]);
  await Joke.bulkCreate([
    {
      setup: "What's the best undersea dessert?",
      punchline: "Flanatee",
      UserId: 1,
    },
    {
      setup: "How do fish unlock things?",
      punchline: "With manakeys",
      UserId: 1,
    },
    {
      setup: "Who reads mermaids the news?",
      punchline: "Anchormanatees",
      UserId: 3
    }
   
  ]);
  await Comment.bulkCreate([
      {
        UserId:2,
        JokeId:2,
        body:"very corny"
      },
      {
        UserId:2,
        JokeId:3,
        body:"flan is gross so slimy"
      },
      {
        UserId:1,
        JokeId:2,
        body:"this is great joke! how would a fish use keys? hahahahahahaha"
      },
  ])
  
  process.exit(0);
};

start();
