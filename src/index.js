const fastify = require('fastify')({
    logger: true
});

const productRouter = require('./routes/product.route');
const swagger = require('./utils/swagger');

require('./utils/db');

fastify.register(require('fastify-swagger'), swagger.options)

fastify.get('/', (request, reply) => {
    reply.send('Hola')
})

productRouter.forEach((route) => {
    fastify.route(route)
});

const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`Server listen on port ${fastify.server.address().port}`)
}

start();