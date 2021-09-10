const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBudget = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to get all envelopes.'
  // #swagger.summary = 'Get all envelopes'
  // #swagger.tags = ['Envelopes']
try {
  const userId = Number(req.params.userId)
    console.log(userId)
    const envelopes = await prisma.envelopes.findMany({
      where: {userId: userId}
    });
    console.log(envelopes);
    if (!envelopes) {
      res.send("There are no envelopes");
    }
    const budgetSum = envelopes.reduce(function(prev, cur) {
        return prev + Number(cur.budget);
      }, 0);
      
    res.json({sum: budgetSum, success: true});
} catch (error) {
  res.status(500).send({error: error, success:false})
}
  
    
  
};

module.exports = getBudget;
