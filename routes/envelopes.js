const envelopesRouter = require('express').Router();
const { allEnvelopes} = require('../data/db')

module.exports = envelopesRouter;

envelopesRouter.get('/', function(req, res, next) {
    const envelope = allEnvelopes;
    console.log(envelope)
    res.send(envelope)
  });