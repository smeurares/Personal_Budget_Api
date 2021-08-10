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
  
  const allEnvelopes = await prisma.envelopes.findMany();
 
  const envelopeId = req.params.envelopeId
  const envelopeById = allEnvelopes.find(element => element.id === Number(envelopeId));
  if(envelopeById){
    const updated = await prisma.envelopes.update({
      where: { id: Number(envelopeId) },
      data: { title: req.query.title, budget: Number(req.query.budget) },
    })
    res.json({updated, message: 'Envelope was updated!'});
  } else {
    res.json({message: 'Envelope not found'})
  }
  
};

module.exports = updateEnvelope;
