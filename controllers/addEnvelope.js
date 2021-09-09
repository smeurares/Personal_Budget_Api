const { PrismaClient } = require("@prisma/client");
const { findUserById } = require("./signUp");
const prisma = new PrismaClient();

const addAnEnvelope = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to add an envelope.'
  // #swagger.summary = 'Add an envelope'
  // #swagger.tags = ['Envelopes']
  try {
    let { budget, title, userId } = req.body;
    budget = parseInt(budget);
    const allUsers = await prisma.user.findMany()
    const userById = allUsers.find(element => element.id === Number(userId));
    const newBudget = await prisma.envelopes.create({
      data: { budget: budget, title: title, userId: userId },
    });
    const getAllEnvelopes = await prisma.envelopes.findMany({
      where: { userId: userId },
    });
    if(newBudget){
      res.json({ envelopes: getAllEnvelopes, success: true });
    } else {
      res.json({message: "Operation Failed", success: false})
    }
  } catch (error) {
    res.status(500).send({error: error, success:false})
  }
    
    
  
};

module.exports = addAnEnvelope;