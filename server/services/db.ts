import { connect, connection, Mongoose } from 'mongoose';

import { logError } from '../utilities/error';

export default class DbClient {
  private uri: string;

  constructor(uri: string = 'mongodb://mongo:27017/db') {
    this.uri = uri;
  }

  public connect(): Promise<Mongoose> {
    connection.on('error', logError);
    connection.on('open', () => console.log(`DB: Connected @ ${ this.uri }`));

    return connect(this.uri, { useNewUrlParser: true });
  }
}
