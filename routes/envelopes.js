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



envelopesRouter.get("/", getAllEnvelopes); //documented

envelopesRouter.post("/", addEnvelope); //documented

envelopesRouter.post("/:fromId/transfer/:toId", transferBudget);

envelopesRouter.get("/:envelopeId", getEnvelope); //documented

envelopesRouter.put("/:envelopeId", updateEnvelope); //documented

envelopesRouter.delete("/:envelopeId", removeEnvelope); //documented

module.exports = envelopesRouter;
