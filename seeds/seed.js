const db = require("../config/connection.js");
const User = require("../models/User");
const Joke = require("../models/Joke");

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
      author: "Joe Rehfuss"
    },
    {
      setup: "How do fish unlock things?",
      punchline: "With manakeys",
      author: "Joe Rehfuss"
    },
    {
      setup: "Who reads mermaids the news?",
      punchline: "Anchormanatees",
      author: "Jeo Rehfuss"
    }
  ]);
  
  process.exit(0);
};

start();
