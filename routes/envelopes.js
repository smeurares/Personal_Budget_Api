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