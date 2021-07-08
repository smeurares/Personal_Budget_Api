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

const createEnvelopes = (budget = 100) => {
  
  const random = Math.floor(Math.random() * categories.length);

  return {
    id: `${envelopeId++}`,
    category: categories[random],
    money: budget,
  };
};

const allEnvelopes = categories.map((price, index) => {
   price = index * 2;
   const envelope = createEnvelopes(price)
   return envelope;
}) 


module.exports = { allEnvelopes};
