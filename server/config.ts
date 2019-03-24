import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export const { BASE_URI, MONGODB_URI, PORT } = process.env;
