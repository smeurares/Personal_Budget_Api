const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllEnvelopes = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to get all envelopes.'
  // #swagger.summary = 'Get all envelopes'
  // #swagger.tags = ['Envelopes']

  
    const userId = Number(req.params.userId)
    console.log(userId)
    const envelopes = await prisma.envelopes.findMany({
      where: {userId: userId}
    });
    console.log(envelopes);
    if (!envelopes) {
      res.send("There are no envelopes");
    }
    res.json(envelopes);
  
};

module.exports = getAllEnvelopes;
