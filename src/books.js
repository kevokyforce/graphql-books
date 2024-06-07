const books = [
    {
      id: '1',
      title: 'A Color of His Own',
      author: 'Leo Lionni',
      pages: [
        {
          pageIndex: 0,
          content: "Parrots are green.",
          tokens: [
            { value: "parrots", position: [0, 7] },
            { value: "are", position: [8, 11] },
            { value: "green", position: [12, 17] }
          ]
        },
        {
          pageIndex: 1,
          content: "Goldfish are red.",
          tokens: [
            { value: "goldfish", position: [0, 8] },
            { value: "are", position: [9, 12] },
            { value: "red", position: [13, 16] }
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Fishing in the Air',
      author: 'Sharon Creech',
      pages: [
        {
          pageIndex: 0,
          content: "",
          tokens: []
        },
        {
          pageIndex: 1,
          content: "One Saturday, when I was young, my father and I left the house early in the morning, when it was still blue-black outside. The grass left wet marks on our shoes. In the backyard, under stones, we dug up crawly worms and laid them in a can with lumps of damp dirt.",
          tokens: [
            { value: "one", position: [0, 3] },
            { value: "saturday", position: [4, 12] },
            { value: "when", position: [13, 17] },
            { value: "i", position: [18, 19] },
            { value: "was", position: [20, 23] },
            { value: "young", position: [24, 29] },
            { value: "my", position: [30, 32] },
            { value: "father", position: [33, 39] },
            { value: "and", position: [40, 43] },
            { value: "i", position: [44, 45] },
            { value: "left", position: [46, 50] },
            { value: "the", position: [51, 54] },
            { value: "house", position: [55, 60] },
            { value: "early", position: [61, 66] },
            { value: "in", position: [67, 69] },
            { value: "the", position: [70, 73] },
            { value: "morning", position: [74, 81] },
            { value: "when", position: [82, 86] },
            { value: "it", position: [87, 89] },
            { value: "was", position: [90, 93] },
            { value: "still", position: [94, 99] },
            { value: "blue-black", position: [100, 110] },
            { value: "outside", position: [111, 118] },
            { value: "the", position: [119, 122] },
            { value: "grass", position: [123, 128] },
            { value: "left", position: [129, 133] },
            { value: "wet", position: [134, 137] },
            { value: "marks", position: [138, 143] },
            { value: "on", position: [144, 146] },
            { value: "our", position: [147, 150] },
            { value: "shoes", position: [151, 156] },
            { value: "in", position: [157, 159] },
            { value: "the", position: [160, 163] },
            { value: "backyard", position: [164, 172] },
            { value: "under", position: [173, 178] },
            { value: "stones", position: [179, 185] },
            { value: "we", position: [186, 188] },
            { value: "dug", position: [189, 192] },
            { value: "up", position: [193, 195] },
            { value: "crawly", position: [196, 202] },
            { value: "worms", position: [203, 208] },
            { value: "and", position: [209, 212] },
            { value: "laid", position: [213, 217] },
            { value: "them", position: [218, 222] },
            { value: "in", position: [223, 225] },
            { value: "a", position: [226, 227] },
            { value: "can", position: [228, 231] },
            { value: "with", position: [232, 236] },
            { value: "lumps", position: [237, 242] },
            { value: "of", position: [243, 245] },
            { value: "damp", position: [246, 250] },
            { value: "dirt", position: [251, 255] }
          ]
        }
      ]
    }
  ];
  
  module.exports = books;
  