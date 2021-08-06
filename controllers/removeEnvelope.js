const { deleteEnvelope, findById } = require("../data/db");

const removeEnvelope =  (req, res) => {
  try {
    const envelopeId = req.params.envelopeId;
    const envelope = findById(envelopeId);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }

    const updatedEnvelopes = deleteEnvelope(envelopeId);
    return res.send(updatedEnvelopes);
    
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = removeEnvelope;
