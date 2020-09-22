import { Channel, Client, TextChannel } from 'discord.js';

export function broadcastOnBotReady(
  client: Client,
  channels: string[] = undefined
): void {
  client.once('ready', () => {
    client.channels.cache.each((channel: Channel) => {
      if (
        channel.type === 'text' &&
        (!channels || channels.includes(channel.id))
      ) {
        (channel as TextChannel).send('Comienza la desgracia');
      }
    });
  });
}
