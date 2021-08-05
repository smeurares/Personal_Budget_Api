const { envelopes } = require("../data/db");

const getEnvelope = (req, res, next) => {
  const envelopeId = req.params.envelopeId;
  if (envelopeId > 0 && envelopeId < envelopes.length) {
    res.send(envelopes[envelopeId - 1]);
  } else {
    res.status(400).send({ message: "ID not found" });
  }
};

module.exports = getEnvelope;
