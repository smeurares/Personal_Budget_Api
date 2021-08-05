const { findById } = require("../data/db");

const transferBudget = (req, res, next) => {
  try {
    const fromId = req.params.fromId;
    const toId = req.params.toId;
    console.log(req.body)
    const amount = req.body.amount;
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
    console.log(amountTo, amountFrom)

    return res.status(201).send(amountFrom);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = transferBudget;
