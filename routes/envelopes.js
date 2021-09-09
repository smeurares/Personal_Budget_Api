const envelopesRouter = require("express").Router();

const getAllEnvelopes = require("../controllers/getAllEnvelopes");
const addEnvelope = require("../controllers/addEnvelope");
const getEnvelope = require("../controllers/getEnvelope");
const updateEnvelopeBudget = require("../controllers/updateEnvelopeBudget");
const updateEnvelopeTitle = require("../controllers/updateEnvelopeTitle");

const removeEnvelope = require("../controllers/removeEnvelope");
const transferBudget = require("../controllers/transferBudget");

envelopesRouter.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

envelopesRouter.get("/:userId", getAllEnvelopes); //documented

envelopesRouter.post("/", addEnvelope); //documented

envelopesRouter.post("/:fromId/transfer/:toId", transferBudget);

envelopesRouter.get("/:userId/:envelopeId", getEnvelope); //documented

envelopesRouter.put("/:envelopeId", updateEnvelopeBudget); //documented

envelopesRouter.put("/:envelopeId/title", updateEnvelopeTitle); //documented

envelopesRouter.delete("/:envelopeId", removeEnvelope); //documented

module.exports = envelopesRouter;
