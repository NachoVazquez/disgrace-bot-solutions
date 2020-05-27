import { Client, TextChannel } from 'discord.js';
import { randomizeDisgracersOnMessage } from '../commands/randomize-disgrace';
import * as config from '../../assets/json/config.json';
import { enteredDisgrace } from '../events/entered-disgrace';

export class DisgraceBot {
  client: Client;

  async start() {
    this.client = new Client();
    this.broadcastOnBotReady();
    randomizeDisgracersOnMessage(this.client);
    enteredDisgrace(this.client);
    await this.client.login(config.token);
  }

  broadcastOnBotReady(): void {
    this.client.once('ready', () => {
      this.client.channels.cache.each((channel) => {
        if (
          channel.type === 'text' ||
          (channel.type === 'dm' && channel.id === '712686629646499891')
        ) {
          (channel as TextChannel).send('Comienza la desgracia');
        }
      });
    });
  }
}
