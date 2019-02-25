import { gql } from 'apollo-boost';

/* Recipe queries */
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      name
      category
      description
      instructions
      createdAt
      likes
      username
    }
  }
`;

/* Recipe mutations */

/* User queries */

/* User mutations */
export const SINGIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SINGUP_USER = gql`
  mutation ($username: String! $password: String!, $email: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
