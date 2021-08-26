const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEnvelope = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to get an envelope by id.'
  // #swagger.summary = 'Get envelope by id'
  // #swagger.tags = ['Envelopes']
  //  #swagger.parameters['envelopeId'] = { description: 'Envelope ID', type: 'integer' }
  
  try {
    const envelopeId = req.params.envelopeId;
    const userId = req.params.userId
    const allEnvelopes = await prisma.envelopes.findMany();
    const allUsers = await prisma.user.findMany()
    const envelopeById = allEnvelopes.find(element => element.id === Number(envelopeId));
    const userById = allUsers.find(element => element.id === Number(userId));
    if (envelopeById && userById) {
      const envelope = await prisma.envelopes.findFirst({
        where: {
          id: {
            equals: Number(envelopeId),
          },
          userId: {
            equals: Number(userId),
          },
        },
      });
      console.log(envelope)
      res.json({envelope: envelope, success: true});
    } else {
      res.status(400).send({ message: "ID not found", success: false });
    }
  
  } catch (error) {
    res.status(500).send({success: false})
  }
    
};

module.exports = getEnvelope;
