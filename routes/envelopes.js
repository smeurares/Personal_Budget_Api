const envelopesRouter = require('express').Router();
const { envelopes } = require('../data/db')

module.exports = envelopesRouter;

envelopesRouter.get('/', (req, res, next) => {
    res.send(envelopes)
  });

// envelopesRouter.post('/', (req, res, next) => {
    
//     const newBudget = createBudget(req.query.budget);
//     console.log(newBudget)
//     res.status(201).send(newBudget)
// })