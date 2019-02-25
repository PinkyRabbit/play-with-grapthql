'use strict';

const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    }
  },

  Mutation: {
    addRecipe: async (root, {
      name,
      category,
      description,
      instructions,
      username
    }, { Recipe }) => {
      const recipe = await new Recipe({
        name,
        category,
        description,
        instructions,
        username
      }).save();
      return recipe;
    },

    signupUser: async (root, {
      username,
      email,
      password,
    }, { User }) => {
      const user = await User.findOne({ $and: [{ username }, { email }]});
      if (user) {
        throw new Error('User already exists!');
      }

      const newUser = await new User({
        username,
        email,
        password,
      }).save();

      return { token: createToken(newUser, process.env.SECRET, '1h') };
    }
  }
};
