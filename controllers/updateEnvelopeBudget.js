const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateEnvelope = async (req, res, next) => {
  // #swagger.description = 'Endpoint used to update an envelope.'
  // #swagger.summary = 'Update an envelope'
  // #swagger.tags = ['Envelopes']
  //  #swagger.parameters['envelopeId'] = { description: 'envelope id', type: 'integer' }
/*  #swagger.parameters['title'] = {
                in: 'query',
                description: 'title',
                type: 'string'
        } */
        /*  #swagger.parameters['budget'] = {
                in: 'query',
                description: 'budget',
                type: 'integer'
        } */
  try {
    const allEnvelopes = await prisma.envelopes.findMany();
 
  const envelopeId = req.params.envelopeId
  const envelopeById = allEnvelopes.find(element => element.id === Number(envelopeId));
  if(envelopeById){
    const updated = await prisma.envelopes.update({
      where: { id: Number(envelopeId) },
      data: { budget: Number(req.body.budget) },
    })
    res.json({updated: updated, success: true});
  } else {
    res.json({message: 'Envelope not found', success: false})
  }
  } catch (error) {
   res.status(500).send({success: false})
  }
  
  
};

module.exports = updateEnvelope;
