'use strict';

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
    }
  }
};
