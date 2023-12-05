import express from 'express';
import cors from 'cors';
import http from 'http';

function bootstrap() {
  const app = express();
  app.use(cors());

  const server = http.createServer(app);

  app.get('/', (req, res) => {
    res.type('json');
    res.send({ message: 'Hello world!' });
  });

  app.post('/form', (req, res) => {
    console.log('form hit', req);
  });

  server.listen(3080, () => {
    console.log('Listening at http://localhost:3080');
  });
}

bootstrap();
