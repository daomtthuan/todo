import moment from 'moment';

import { COLLECTION } from '../common/config.js';
import console from '../common/console.js';
import { executeCollection } from '../common/db.js';
import { getArgValue, isCommand } from '../common/system.js';

if (isCommand('list')) {
  console.info('Listing tasks');
  await executeCollection(COLLECTION.TASKS, async (collection) => {
    const tasks = await collection.find({}).toArray();

    console.debug('Tasks: %o', tasks);
  });

  process.exit(0);
}

if (isCommand('create')) {
  console.info('Creating task');

  const name = getArgValue('name');
  const description = getArgValue('description');
  const dueDate = getArgValue('dueDate');
  const labels = getArgValue('labels');

  const task = {
    name: typeof name === 'string' ? name.trim() : 'Untitled',
    description,
    dueDate: (dueDate.isValid() ? dueDate : moment()).toJSON(),
    labels,
  };

  console.debug('Task: %o', task);
}
