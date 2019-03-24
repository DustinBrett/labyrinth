import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';

import controllers from '../controllers';
import { errorHandler } from '../utilities/error';

export default class ApiServer {
  private express: express.Application;
  private port: number;

  constructor(baseUri: string = '/v1', port: string | number = 3000) {
    this.express = express();
    this.port = typeof port === 'string' ? parseInt(port, 10) : port;

    // Request
    this.express.use(compression());
    this.express.use(cors({ methods: ['GET', 'POST'] }));

    // Headers
    this.express.disable('x-powered-by');

    // Controllers
    this.express.use(baseUri, controllers());

    // Error Handling
    this.express.use(errorHandler);
  }

  public start(): void {
    this.express.listen(this.port, () => {
      console.log(`API: Listening @ http://localhost:${ this.port }`);
    });
  }
}
