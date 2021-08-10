const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addAnEnvelope = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to add an envelope.'
  // #swagger.summary = 'Add an envelope'
  // #swagger.tags = ['Envelopes']
  try {
    let { budget, title } = req.body;
    budget = parseInt(budget);
    const newBudget = await prisma.envelopes.create({
      data: { budget: budget, title: title },
    });
    const getAllEnvelopes = await prisma.envelopes.findMany();
    res.json(getAllEnvelopes);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = addAnEnvelope;
