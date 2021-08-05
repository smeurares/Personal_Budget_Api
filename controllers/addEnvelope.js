const {addEnvelope} = require('../data/db');

const addAnEnvelope = (req, res, next) => {
    const { budget, title } = req.query;
    const newBudget = addEnvelope(budget, title);
    console.log(newBudget);
    res.status(201).send(newBudget);
}

module.exports = addAnEnvelope;
