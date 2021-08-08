const { envelopes } = require("../data/db");

const getAllEnvelopes = (req, res, next) => {
  // #swagger.description = 'Endpoint used to get all envelopes.'
  // #swagger.summary = 'Get all envelopes'
  // #swagger.tags = ['Envelopes']

  res.send(envelopes);
};

module.exports = getAllEnvelopes;
