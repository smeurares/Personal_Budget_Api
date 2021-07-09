const faker = require("faker");
const casual = require('casual')

let envelopeId = 1;

const categories = [
    "groceries",
    "health",
    "grooming",
    "vices",
    "bussines",
    "exentricity",
    "dating",
    "travel",
    "clothing",
    "household",
    "investing",
    "war",
  ];

const createEnvelope = (budget, category) => {
  
  const random = Math.floor(Math.random() * categories.length);

  return {
    id: `${envelopeId++}`,
    category: categories[category],
    money: budget,
  };
};

const allEnvelopes = categories.map((price, index, category) => {
   price = index * 2 + 1;
   category = index
   const envelope = createEnvelope(price, category)
   return envelope;
}) 


module.exports = { allEnvelopes};
