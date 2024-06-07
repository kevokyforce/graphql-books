const { gql } = require('apollo-server');

const typeDefs = gql`
  type Token {
    value: String!
  }

  type Page {
    content: String!
    tokens: [Token!]!
  }

  type Book {
    title: String!
    author: String!
    pages: [Page!]!
  }

  type Query {
    books: [Book!]!
  }
`;

module.exports = typeDefs;
