import { Client, StreamDispatcher } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';

import * as disgracers from '../../assets/json/disgracers.json';

export function enteredDisgrace(client: Client): void {
  client.on('voiceStateUpdate', async (oldMember, newMember) => {
    const newUserChannel = newMember.channel;
    const oldUserChannel = oldMember.channel;

    let dispatcher: StreamDispatcher;

    if (!oldUserChannel && !!newUserChannel) {
      const connection = await newUserChannel.join();

      switch (newMember.member.id) {
        case disgracers['Marcel']:
          dispatcher = connection.play(
            path.join(__dirname, 'assets/sounds/marcel.mp3')
          );
          break;
        case disgracers['Norby']:
          dispatcher = connection.play(
            path.join(__dirname, 'assets/sounds/norby.mp3')
          );
          break;
        case disgracers['Mauro']:
          dispatcher = connection.play(
            path.join(__dirname, 'assets/sounds/mauro.mp3')
          );
          break;
        case disgracers['Nacho']:
          dispatcher = connection.play(
            path.join(__dirname, 'assets/sounds/yo.mp3')
          );
          break;
        case disgracers['Pedro']:
          dispatcher = connection.play(
            path.join(__dirname, 'assets/sounds/pedro.mp3')
          );
          break;
        case disgracers['Aldo']:
          dispatcher = connection.play(
            path.join(__dirname, 'assets/sounds/aldo.mp3')
          );
          break;

        default:
          break;
      }
    } else if (newUserChannel === undefined) {
      // User leaves a voice channel
    }
  });
}
