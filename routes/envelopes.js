const envelopesRouter = require("express").Router();

const getAllEnvelopes = require("../controllers/getAllEnvelopes");
const addEnvelope = require("../controllers/addEnvelope");
const getEnvelope = require("../controllers/getEnvelope");
const updateEnvelope = require("../controllers/updateEnvelope");
const removeEnvelope = require("../controllers/removeEnvelope");
const transferBudget = require("../controllers/transferBudget");

envelopesRouter.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

envelopesRouter.get("/", getAllEnvelopes);

envelopesRouter.post("/", addEnvelope);

envelopesRouter.post("/:fromId/transfer/:toId", transferBudget);

envelopesRouter.get("/:envelopeId", getEnvelope);

envelopesRouter.put("/:envelopeId", updateEnvelope);

envelopesRouter.delete("/:envelopeId", removeEnvelope);

module.exports = envelopesRouter;
