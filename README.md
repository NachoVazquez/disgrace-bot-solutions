# DisgraceBotSolutions

Welcome to Disgrace Bot Solutions!!!

## Setup

If you just clone this repository or a fork of it, you should run the following commands:

1. `yarn` / `npm i`

### Build and Run the disgrace-bot app (linux/mac)

1. Create a file named **config.json** under `apps/disgrace-bot/src/assets/json/`.
1. Copy to the **config.json** file a json with the form

```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN"
}
```

This file will be ignore since the token of your bot can be used for **disgrace** purposes

1. `yarn build disgrace-bot` / `yarn start disgrace-bot` depending if you want to **build** a production ready bot or **run** a development local server

## Disgrace Management

`disgrace-management` is a **React** app that is being built with the goal of manage everything related to the `disgrace-bot` bot family.
