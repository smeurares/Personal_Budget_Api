const faker = require("faker");
const casual = require("casual");

const envelopes = [
    {
        id: 1,
        title: 'groceries',
        budget: 200
    },
    {
        id: 2,
        title: 'health',
        budget: 400
    },
    {
        id: 1,
        title: 'household',
        budget: 300
    },
    {
        id: 1,
        title: 'vices',
        budget: 50
    },
    {
        id: 1,
        title: 'rent',
        budget: 500
    },
    {
        id: 1,
        title: 'business',
        budget: 2000
    },
    {
        id: 1,
        title: 'exentricity',
        budget: 5000
    },
    {
        id: 1,
        title: 'legal',
        budget: 7000
    },
]

const createEnvelope = (budget, category) => {
  const random = Math.floor(Math.random() * categories.length);

  return {
    id: `${envelopeId++}`,
    category: categories[category],
    money: budget,
  };
};



const createBudget = (budget) => {
  const envelopesBudget = allEnvelopes.map((category) => {

    const budgetForEnvelope = budget / categories.length;
    amount.money = budgetForEnvelope;
    createEnvelope(amount.money, amount.category);
  });

   const definedBudget = budget
   console.log(envelopesBudget)
  return {
    id: `${budgetId++}`,
    budget: definedBudget,
    envelopes: envelopesBudget,
  };
};

module.exports = { envelopes };
