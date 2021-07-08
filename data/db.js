const faker = require("faker");

let envelopeId = 1;

const createEnvelope = (budget) => {
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

  const random = Math.floor(Math.random() * categories.length);

  return {
    id: `${envelopeId++}`,
    name: categories[random],
    category: categories[random],
    budget: budget,
  };
};

const allEnvelopes = new Array(10).fill(0).map(createEnvelope);

const db = {
  allEnvelopes: {
    data: allEnvelopes,
  },
};

module.exports = { db, createEnvelope };
