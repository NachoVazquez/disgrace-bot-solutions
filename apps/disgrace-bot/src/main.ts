import { DisgraceBot } from './app/bots/disgrace-bot';

import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-app!' });
});

const port = process.env.port || 8080;
const server = app.listen(port, () => {
  async function start() {
    const disgraceBot = new DisgraceBot();

    await disgraceBot.start();
  }

  start();
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
