const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addAnEnvelope = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to add an envelope.'
  // #swagger.summary = 'Add an envelope'
  // #swagger.tags = ['Envelopes']
  try {
    let { budget, title, userId } = req.body;
    budget = parseInt(budget);
    const newBudget = await prisma.envelopes.create({
      data: { budget: budget, title: title, userId: userId },
    });
    const getAllEnvelopes = await prisma.envelopes.findMany({
      where: { userId: userId },
    });
    res.json({ envelopes: getAllEnvelopes, success: true });
  } catch (error) {
    res.status(500).send({ error: error, success: false });
  }
};

module.exports = addAnEnvelope;
