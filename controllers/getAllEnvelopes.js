const { envelopes } = require("../data/db");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const getAllEnvelopes = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to get all envelopes.'
  // #swagger.summary = 'Get all envelopes'
  // #swagger.tags = ['Envelopes']

  try {
   const envelopes = await prisma.envelopes.findMany();
   console.log(envelopes)
   if(!envelopes){
     res.send('There are no envelopes')
   }
   res.json(envelopes);
  } catch (error){
    res.status(500).send(error);
  }
};

module.exports = getAllEnvelopes;
