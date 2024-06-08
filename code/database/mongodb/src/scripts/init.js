import { COLLECTION } from '../common/config.js';
import console from '../common/console.js';
import { executeCollection, executeDatabase } from '../common/db.js';
import tasks from '../data/tasks.js';

console.info('Dropping collection');
await executeDatabase(async (database) => {
  await database.dropCollection(COLLECTION.TASKS);

  console.debug('Dropped collection %o', COLLECTION.TASKS);
});

console.info('Creating collection');
await executeCollection(COLLECTION.TASKS, async (collection) => {
  /** @type {import('mongodb').InsertManyResult<import('../types/model').Task>} */
  const result = await collection.insertMany(tasks);
  console.debug(`Inserted %o ${result.insertedCount > 1 ? 'documents' : 'document'} %o`, result.insertedCount, result.insertedIds);
});
