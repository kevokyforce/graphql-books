const { gql } = require('apollo-server');
const books = require('./books');

const typeDefs = gql`
  type Token {
    value: String
    position: [Int]
  }

  type Page {
    pageIndex: Int
    content: String
    tokens: [Token]
  }

  type Book {
    id: ID!
    title: String
    author: String
    pages: [Page]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
  },
};

module.exports = { typeDefs, resolvers };
