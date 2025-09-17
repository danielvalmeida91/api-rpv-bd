import cors from '@fastify/cors'
import { app } from '../src/app.js';

async function bootstrap() {
  app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.listen({
    host: '0.0.0.0',
    port: '3000'
  }).then(() => {
    console.log('🚀 HTTP Server Running on PORT: 3000')
  })
}

bootstrap();