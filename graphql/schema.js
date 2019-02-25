'use strict';

exports.typeDefs = `

  type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdAt: String!
    likes: Int!
    username: String
  }

  type User {
    _id: ID
    username: String! @unique
    password: String!
    email: String!
    createdAt: String!
    favorites: [Recipe]
  }

  type Query {
    getAllRecipes: [Recipe]
  }

  type Token {
    token: String!
  }

  type Mutation {
    addRecipe(
      name: String!,
      category: String!,
      description: String!,
      instructions: String!,
      username: String
    ): Recipe
    
    signinUser(
      username: String!
      password: String!
    ): Token

    signupUser(
      username: String!
      password: String!
      email: String!
    ): Token
  }
`;
