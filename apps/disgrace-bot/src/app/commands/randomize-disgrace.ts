import { Client, Message } from 'discord.js';
import * as config from '../../assets/config.json';
import { ChannelType } from '../types/channel-type';

function randomizeDisgrace(message: Message): void {
  const { members } = message.mentions;

  const voiceChannels = message.mentions.channels
    .filter((channel) => (channel.type as string) === ChannelType.voice)
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

export function randomizeDisgracersOnMessage(client: Client): void {
  client.on('message', (message) => {
    if (
      message.content.startsWith(`${config.prefix}rd`) ||
      message.content.startsWith(`${config.prefix}random-disgrace`)
    ) {
      randomizeDisgrace(message);
    }
  });
}
