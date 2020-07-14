import { Client } from 'discord.js';
import * as path from 'path';

import * as disgracers from '../../assets/json/disgracers.json';

export function enteredDisgrace(client: Client): void {
  client.on('voiceStateUpdate', async (oldMember, newMember) => {
    const newUserChannel = newMember.channel;
    const oldUserChannel = oldMember.channel;

    if (!oldUserChannel && !!newUserChannel) {
      const connection = await newUserChannel.join();

      const date = new Date();

      switch (newMember.member.id) {
        case disgracers['Marcel']:
          connection.play(path.join(__dirname, 'assets/sounds/marcel.mp3'));
          break;
        case disgracers['Norby']:
          if (date.getDay() === 2 && date.getMonth() === 6) {
            connection.play(
              path.join(__dirname, 'assets/sounds/insu-cumple.mp3')
            );
          } else {
            connection.play(path.join(__dirname, 'assets/sounds/norby.mp3'));
          }
          break;
        case disgracers['Mauro']:
          connection.play(path.join(__dirname, 'assets/sounds/mauro.mp3'));
          break;
        case disgracers['Nacho']:
          connection.play(path.join(__dirname, 'assets/sounds/yo.mp3'));
          break;
        case disgracers['Pedro']:
          connection.play(path.join(__dirname, 'assets/sounds/pedro.mp3'));
          break;
        case disgracers['Aldo']:
          connection.play(path.join(__dirname, 'assets/sounds/aldo.mp3'));
          break;

        default:
          break;
      }
    } else if (
      !newUserChannel &&
      oldUserChannel.members.size === 1 &&
      oldUserChannel.members.firstKey() === client.user.id
    ) {
      oldUserChannel.leave();
    }
  });
}
