import DbClient from './services/db';
import ApiServer from './services/api';

import { BASE_URI, MONGODB_URI, PORT } from './config';

new DbClient(MONGODB_URI).connect().then(() => {
  new ApiServer(BASE_URI, PORT).start();
});
