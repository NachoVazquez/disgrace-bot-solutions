import { Client } from 'discord.js';

import { randomizeDisgracersOnMessage } from '../commands/randomize-disgrace';
import * as config from '../../assets/json/config.json';
import { enteredDisgrace } from '../events/entered-disgrace';
import { broadcastOnBotReady } from '../events/broadcast-on-ready';
import { setupRollbar } from '../setup-rollbar';

export class DisgraceBot {
  client: Client;

  async start(): Promise<void> {
    this.client = new Client();
    this.setupEvents();
    this.setupCommands();
    const rollbar = setupRollbar();

    try {
      await this.client.login(config.token);
      rollbar.log('[Disgrace Bot] Client login succeed.');
    } catch (error) {
      rollbar.error('[Disgrace Bot] Client login failed. \n' + error.message);
      throw error;
    }
  }

  setupEvents(): void {
    broadcastOnBotReady(this.client, ['758060659643645993']);
    enteredDisgrace(this.client);
  }

  setupCommands(): void {
    randomizeDisgracersOnMessage(this.client);
  }
}
