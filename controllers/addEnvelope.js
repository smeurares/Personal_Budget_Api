const { addEnvelope } = require("../data/db");

const addAnEnvelope = (req, res, next) => {
  // #swagger.description = 'Endpoint used to add an envelope.'
  // #swagger.summary = 'Add an envelope'
  // #swagger.tags = ['Envelopes']

  const { budget, title } = req.query;
  const newBudget = addEnvelope(budget, title);
  console.log(newBudget);
  res.status(201).send(newBudget);
};

module.exports = addAnEnvelope;
