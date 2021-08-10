const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const removeEnvelope = async (req, res) => {
  // #swagger.description = 'Endpoint used to remove an envelope.'
  // #swagger.summary = 'Remove an envelope'
  // #swagger.tags = ['Envelopes']
  //  #swagger.parameters['envelopeId'] = { description: 'Envelope ID', type: 'integer' }
try {
  const envelopeId = req.params.envelopeId;
  const allEnvelopes = await prisma.envelopes.findMany();
  const envelopeById = allEnvelopes.find(element => element.id === Number(envelopeId));
  if(envelopeById){
    const deletedEnvelope = await prisma.envelopes.delete({
      where: { id: Number(envelopeId) },
    });
    res.json(deletedEnvelope);
  } else {
    res.status(400).send({ message: "ID not found" });
  }
} catch (error) {
  res.status(500).send(error);
}
  
  
};

module.exports = removeEnvelope;
