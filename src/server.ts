
import fastify from 'fastify';
import { Product } from './product/entities.js';
import { productRoutes } from './product/api.js';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import { Payload } from './product/schema.js';


const  server = fastify();
server.register(Swagger);
server.register(SwaggerUI);


server.register(import('fastify-typeorm-plugin'),{
    type: 'postgres',
    username: 'postgres',
    host: 'localhost',
    database: 'e_shop_ff_orm',
    password: '01133',
    entities:[Product],
    port: 5432,     
    logging: true,
    synchronize: true       
  });
  server.register(productRoutes, {prefix: '/product'});
  
  interface IPayload { 
    products ,
}

server.get('/', {
handler : async(request,reply) => {
    const products = await server.orm.manager
    .getRepository(Product)
    .createQueryBuilder('product')
    .getMany();

     reply.code(200).send({status:'active', products: products});

},
preSerialization : async (request, reply,payload : Payload ) => {

  let newPayload = {};

for( let item in payload.products) {
    newPayload[item]= {
        _type: 'Product', 
...payload.products[item],
price: {
    ...payload.products[item].price,
     _type: "Money"
    }
    }

   // console.log(newPayload)
}

return {status: 200, newPayload};

}});




server.listen({port:3000}, (err, address) =>  {
    if(err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at${address}`);
})