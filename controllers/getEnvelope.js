const { envelopes } = require("../data/db");

const getEnvelope = (req, res, next) => {
  // #swagger.description = 'Endpoint used to get an envelope by id.'
  // #swagger.summary = 'Get envelope by id'
  // #swagger.tags = ['Envelopes']

  const envelopeId = req.params.envelopeId;
  if (envelopeId > 0 && envelopeId < envelopes.length) {
    res.send(envelopes[envelopeId - 1]);
  } else {
    res.status(400).send({ message: "ID not found" });
  }
};

module.exports = getEnvelope;
