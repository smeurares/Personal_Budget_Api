const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEnvelope = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to get an envelope by id.'
  // #swagger.summary = 'Get envelope by id'
  // #swagger.tags = ['Envelopes']
  //  #swagger.parameters['envelopeId'] = { description: 'Envelope ID', type: 'integer' }
  try {
    const envelopeId = req.params.envelopeId;
    const allEnvelopes = await prisma.envelopes.findMany();
    const envelopeById = allEnvelopes.find(element => element.id === Number(envelopeId));
    if (envelopeById) {
      const envelope = await prisma.envelopes.findFirst({
        where: { id: Number(envelopeId) },
      });
      console.log(envelope)
      res.json(envelope);
    } else {
      res.status(400).send({ message: "ID not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getEnvelope;
