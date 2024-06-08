import { Collection, MongoClient } from 'mongodb';

import { CONNECTION_STRING, DATABASE } from './config.js';
import console from './console.js';

const client = new MongoClient(CONNECTION_STRING);

/**
 * Execute function
 *
 * @param {import('../types/db').ExecuteDatabaseHandle} handle Handle function
 */
export async function executeDatabase(handle) {
  try {
    await client.connect();
    const database = client.db(DATABASE);
    console.debug('Connected to database %o', DATABASE);

    await handle(database);
  } catch (error) {
    console.error('Executing failed %o', error);
  } finally {
    await client.close();

    console.debug('Disconnected from database %o', DATABASE);
  }
}

/**
 * Execute function
 *
 * @template {import('../types/model').Document} TDocument
 *
 * @param {string} collectionName Collection name
 * @param {import('../types/db').ExecuteCollectionHandle<TDocument>} handle Handle function
 */
export async function executeCollection(collectionName, handle) {
  try {
    await client.connect();
    const database = client.db(DATABASE);

    /** @type {Collection<TDocument>} */
    const collection = database.collection(collectionName);
    console.debug('Connected to database %o, collection %o', DATABASE, collectionName);

    await handle(collection);
  } catch (error) {
    console.error('Executing failed %o', error);
  } finally {
    await client.close();

    console.debug('Disconnected from database %o', DATABASE);
  }
}
