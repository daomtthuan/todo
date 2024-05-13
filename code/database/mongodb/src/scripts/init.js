import console from '../common/console.js';
import { execute } from '../common/db.js';
import { createDocument } from '../common/model.js';

execute('tasks', async (collection) => {
  /** @type {import('../types/model').Task[]} */
  const tasks = [
    createDocument({
      name: 'Task 1',
      description: 'Task 1 description',
      completed: false,
      dueDate: Date.now() + 1000 * 60 * 60 * 24 * 7,
      labels: ['label1', 'label2'],
    }),
  ];

  /** @type {import('mongodb').InsertManyResult<import('../types/model').Task>} */
  const result = await collection.insertMany(tasks);
  console.debug(`Inserted ${result.insertedCount} tasks`, result.insertedIds);
});
