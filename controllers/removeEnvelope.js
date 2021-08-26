const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const removeEnvelope = async (req, res) => {
  // #swagger.description = 'Endpoint used to remove an envelope.'
  // #swagger.summary = 'Remove an envelope'
  // #swagger.tags = ['Envelopes']
  //  #swagger.parameters['envelopeId'] = { description: 'Envelope ID', type: 'integer' }
  try {
  const userId = req.params.userId;
  const envelopeId = req.params.envelopeId;
  const allEnvelopes = await prisma.envelopes.findMany();
  
  const envelopeById = allEnvelopes.find(
    (element) => element.id === Number(envelopeId)
  );
  

  if (envelopeById) {
    const deletedEnvelope = await prisma.envelopes.delete({
      where: { id: Number(envelopeId) },
    });
    res.json({ deletedEnvelope: deletedEnvelope, success: true });
  } else {
    res.status(400).send({ message: "Id not found" });
  }
  } catch (error) {
    res.status(500).send({success: false});
  }
};

module.exports = removeEnvelope;
