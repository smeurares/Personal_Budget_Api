const envelopesRouter = require('express').Router();
const { db, createEnvelope} = require('../data/db')

module.exports = envelopesRouter;

envelopesRouter.get('/', function(req, res, next) {
    const envelope = createEnvelope(400);
    console.log(envelope)
    res.send(envelope)
  });