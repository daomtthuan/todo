import chalk from 'chalk';
import { Collection, MongoClient } from 'mongodb';

import { CONNECTION_STRING, DATABASE } from './config.js';
import console from './console.js';

const client = new MongoClient(CONNECTION_STRING);

/**
 * Execute function
 *
 * @template {import('../types/model').Document} TDocument
 *
 * @param {string} collectionName Collection name
 * @param {import('../types/db').ExecuteHandle<TDocument>} handle Handle function
 */
export async function execute(collectionName, handle) {
  try {
    await client.connect();
    const database = client.db(DATABASE);

    /** @type {Collection<TDocument>} */
    const collection = database.collection(collectionName);
    console.debug(`[debug] Connected to database ${chalk.cyan(DATABASE)}, collection ${chalk.cyan(collectionName)}`);

    await handle(collection);
  } catch (error) {
    console.error(`Executing '${handle.name}' failed %o`, error);
  } finally {
    await client.close();

    console.debug(`Disconnected from database '${DATABASE}'`);
  }
}
