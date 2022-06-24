import express from 'express';
import http from 'http';

function bootstrap() {
  const app = express();
  const server = http.createServer(app);

  app.get('/', (req, res) => {
    res.type('json');
    res.send({ message: 'Hello world!' });
  });

  server.listen(3080, () => {
    console.log('Listening at http://localhost:3080');
  });
}

bootstrap();
