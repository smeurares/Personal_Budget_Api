const envelopesRouter = require('express').Router();
const { envelopes, addEnvelope } = require('../data/db')

module.exports = envelopesRouter;

envelopesRouter.get('/', (req, res, next) => {
    res.send(envelopes)
  });

envelopesRouter.post('/', (req, res, next) => {
    const {budget, title} = req.query;
    const newBudget = addEnvelope(budget, title)
    console.log(newBudget)
    res.status(201).send(newBudget)
})

envelopesRouter.get('/:envelopeId', async (req, res, next) => {
  const envelopeId = req.params.envelopeId;
  if(envelopeId > 0 && envelopeId < envelopes.length) {
    res.send(envelopes[envelopeId - 1])
  } else{
    res.status(400).send({message: 'ID not found'});
  }
})