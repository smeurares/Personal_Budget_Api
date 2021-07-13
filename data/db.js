const faker = require("faker");
const casual = require("casual");

let envelopes = [
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
        id: 3,
        title: 'household',
        budget: 300
    },
    {
        id: 4,
        title: 'vices',
        budget: 50
    },
    {
        id: 5,
        title: 'rent',
        budget: 500
    },
    {
        id: 6,
        title: 'business',
        budget: 2000
    },
    {
        id: 7,
        title: 'exentricity',
        budget: 5000
    },
    {
        id: 8,
        title: 'legal',
        budget: 7000
    },
]

const getNewId = (array) => {
  if (array.length > 0) {
      return array[array.length - 1].id + 1
  } else {
      return 1
  }
}


const addEnvelope = (budget, category) => {
  const newEnvelope = {
    id: getNewId(envelopes),
    title: category,
    budget: budget
  }
  if(newEnvelope) {
    envelopes.push(newEnvelope)
    return envelopes;
  }
};

const updateBudget = (budget, id) => {
  envelopes[id].budget = budget;
  return envelopes[id]
}



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

const deleteEnvelope = (id) => {
  const envelopeId = Number(id);
  envelopes = envelopes.filter(envelope => envelope.id !== envelopeId)
  return envelopes
}

module.exports = { envelopes, addEnvelope, updateBudget,deleteEnvelope };
