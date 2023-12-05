import express from 'express';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';

function bootstrap() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const server = http.createServer(app);

  app.get('/', (req, res) => {
    res.type('json');
    res.send({ message: 'Hello world!' });
  });

  app.post('/form', (req, res) => {
    console.log('form hit', req.body);
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body));
  });

  server.listen(3080, () => {
    console.log('Listening at http://localhost:3080');
  });
}

bootstrap();
