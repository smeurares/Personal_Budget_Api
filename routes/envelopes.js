const envelopesRouter = require("express").Router();
const { envelopes, addEnvelope, updateBudget, deleteEnvelope } = require("../data/db");

module.exports = envelopesRouter;

envelopesRouter.get("/", (req, res, next) => {
  res.send(envelopes);
});

envelopesRouter.post("/", (req, res, next) => {
  const { budget, title } = req.query;
  const newBudget = addEnvelope(budget, title);
  console.log(newBudget);
  res.status(201).send(newBudget);
});

envelopesRouter.get("/:envelopeId", async (req, res, next) => {
  const envelopeId = req.params.envelopeId;
  if (envelopeId > 0 && envelopeId < envelopes.length) {
    res.send(envelopes[envelopeId - 1]);
  } else {
    res.status(400).send({ message: "ID not found" });
  }
});

envelopesRouter.put("/:envelopeId", (req, res, next) => {
  const updatedEnvelope = {
    id: Number(req.params.envelopeId),
    title: req.query.title,
    budget: req.query.budget,
  };
  for (let i = 0; i < envelopes.length; i++) {
    if (envelopes[i].id === updatedEnvelope.id) {
      envelopes[i] = updatedEnvelope; //update all properties
      console.log(envelopes[i])
      break;
    }
  }
  res.send("Updated successfully");
});

envelopesRouter.delete('/:envelopeId', (req, res, next) => {
  deleteEnvelope(req.params.id)
  res.send("Successfully deleted entry");
})


