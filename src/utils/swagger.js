exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify Mongo DB API',
            description: 'jaskjkjs',
            version: '0.0.1'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Para mas info'
        }
    },
    host: 'localhost:3000',
    schemas: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}