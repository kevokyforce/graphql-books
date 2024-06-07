const books = [
  {
    title: "A Color of His Own",
    author: "Leo Lionni",
    pages: [
      {
        content: "Parrots are green",
        tokens: [{ value: "parrots" }, { value: "are" }, { value: "green" }]
      },
      {
        content: "Goldfish are red",
        tokens: [{ value: "goldfish" }, { value: "are" }, { value: "red" }]
      }
    ]
  },
  {
    title: "Fishing in the Air",
    author: "Sharon Creech",
    pages: [
      {
        content: "",
        tokens: []
      },
      {
        content: "One Saturday, when I was young, my father and I left the house early in the morning, when it was still blue-black outside. The grass left wet marks on our shoes. In the backyard, under stones, we dug up crawly worms and laid them in a can with lumps of damp dirt.",
        tokens: [
          { value: "one" },
          { value: "saturday" },
          { value: "when" },
          { value: "i" },
          { value: "was" },
          { value: "young" },
          { value: "my" },
          { value: "father" },
          { value: "and" },
          { value: "i" },
          { value: "left" },
          { value: "the" },
          { value: "house" },
          { value: "early" },
          { value: "in" },
          { value: "the" },
          { value: "morning" },
          { value: "when" }
        ]
      }
    ]
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

module.exports = resolvers;
