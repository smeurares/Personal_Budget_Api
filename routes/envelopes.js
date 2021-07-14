const envelopesRouter = require("express").Router();
const {
  envelopes,
  addEnvelope,
  updateBudget,
  deleteEnvelope,
  findById,
} = require("../data/db");

module.exports = envelopesRouter;

envelopesRouter.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

envelopesRouter.get("/", (req, res, next) => {
  res.send(envelopes);
});

envelopesRouter.post("/", (req, res, next) => {
  const { budget, title } = req.query;
  const newBudget = addEnvelope(budget, title);
  console.log(newBudget);
  res.status(201).send(newBudget);
});

envelopesRouter.post("/:fromId/transfer/:toId", (req, res, next) => {
  try {
    const fromId = req.params.fromId;
    const toId = req.params.toId;
    const {amount} = req.body;
    console.log("amount " + parseInt(amount));

    let amountFrom = findById(fromId);
    console.log(amountFrom.budget);
    let amountTo = findById(toId);
    console.log(amountTo.budget);

    if (!amountFrom || !amountTo) {
      return res.send({
        message: "Envelope Not Found",
      });
    } else if (amount > amountFrom.budget) {
      return res.send({
        message: "Amount to transfer exceeds envelope budget funds",
      });
    } 

      amountTo.budget += amount;
    amountFrom.budget -= amount;

    return res.status(201).send(amountFrom);
    

   
  } catch (err) {
    res.status(500).send(err);
  }
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
      console.log(envelopes[i]);
      break;
    }
  }
  res.send("Updated successfully");
});

envelopesRouter.delete("/:envelopeId", (req, res, next) => {
  deleteEnvelope(req.params.id);
  res.send("Successfully deleted entry");
});
