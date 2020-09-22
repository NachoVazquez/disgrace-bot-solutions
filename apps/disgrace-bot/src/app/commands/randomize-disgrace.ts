import { environment } from '../../environments/environment';
import { Channel, Client, Message } from 'discord.js';

function randomizeDisgrace(message: Message): void {
  const { members } = message.mentions;

  const voiceChannels = message.mentions.channels
    .filter((channel) => (channel as Channel).type === 'voice')
    .array();

  let currChannelIndex = 0;

  while (members?.size || 0 > 0) {
    const currentMemberKey = members?.randomKey();
    const currentMember = members?.get(currentMemberKey || '');
    members?.delete(currentMemberKey || '');

    const currentChannel = voiceChannels[currChannelIndex];
    currentMember?.voice.setChannel(currentChannel);

    currChannelIndex =
      currChannelIndex === voiceChannels.length - 1 ? 0 : currChannelIndex + 1;
  }
}

/**
 * Listen to message from user searching for randomize command
 *
 * @export
 * @param {Client} client
 */
export function randomizeDisgracersOnMessage(client: Client): void {
  client.on('message', (message) => {
    if (
      message.content.startsWith(`${environment.prefix}rd`) ||
      message.content.startsWith(`${environment.prefix}random-disgrace`) ||
      message.content.startsWith(`${environment.prefix}ran-dis`)
    ) {
      randomizeDisgrace(message);
    }
  });
}
