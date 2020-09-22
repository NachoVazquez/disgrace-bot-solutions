import * as Rollbar from 'rollbar';

import { environment } from '../environments/environment';
import * as config from '../assets/json/config.json';

export function setupRollbar(): Rollbar | Console {
  if (environment.production) {
    return new Rollbar({
      accessToken: config.rollbarToken,
      captureUncaught: true,
      captureUnhandledRejections: true,
    });
  } else return console;
}
