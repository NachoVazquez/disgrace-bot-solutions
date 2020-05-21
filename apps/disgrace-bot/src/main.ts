import { DisgraceBot } from './app/bots/disgrace-bot';

async function start() {
  const disgraceBot = new DisgraceBot();

  await disgraceBot.start();
}

start();
