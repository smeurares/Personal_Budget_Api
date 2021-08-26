const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const transferBudget = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to transfer budget from an envelope to another.'
  // #swagger.summary = 'Transfer budget'
  // #swagger.tags = ['Envelopes']
  //  #swagger.parameters['fromId'] = { description: 'from ID', type: 'integer' }
  //  #swagger.parameters['toId'] = { description: 'to ID', type: 'integer' }

  try {
    const fromId = req.params.fromId;
    const toId = req.params.toId;
    const amount = req.body.amount;
    const allEnvelopes = await prisma.envelopes.findMany();
    let amountFrom = allEnvelopes.find(element => element.id === Number(fromId))
    let amountTo = allEnvelopes.find(element => element.id === Number(toId))
   

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
    console.log(amountTo, amountFrom);

    return res.status(201).send({amountFrom: amountFrom, amountTo: amountTo, success: true});
  } catch (err) {
    res.status(500).send({success: false});
  }
};

module.exports = transferBudget;
