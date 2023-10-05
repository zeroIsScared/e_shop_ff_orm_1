import fastify from 'fastify';
import { Product } from './product/entities.js';
import { productRoutes } from './product/api.js';
const server = fastify();
server.register(import('fastify-typeorm-plugin'), {
    type: 'postgres',
    username: 'postgres',
    host: 'localhost',
    database: 'e_shop_ff_orm',
    password: '01133',
    entities: [Product],
    port: 5432,
    logging: true,
    synchronize: true
});
server.register(productRoutes, { prefix: '/product' });
server.get('/', async (request, reply) => {
    const products = await server.orm.manager
        .getRepository(Product)
        .createQueryBuilder('product')
        .getMany();
    console.log(products);
    return reply.code(200).send({ status: 'active', products: products });
});
server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at${address}`);
});
