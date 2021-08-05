const { envelopes } = require("../data/db");

const updateEnvelope = (req, res, next) => {
  const updatedEnvelope = {
    id: Number(req.params.envelopeId),
    title: req.query.title,
    budget: req.query.budget,
  };
  for (let i = 0; i < envelopes.length; i++) {
    if (envelopes[i].id === updatedEnvelope.id) {
      envelopes[i] = updatedEnvelope; //update all envelopes
      console.log(envelopes[i]);
      break;
    }
  }
  res.send("Updated successfully");
};

module.exports = updateEnvelope;
