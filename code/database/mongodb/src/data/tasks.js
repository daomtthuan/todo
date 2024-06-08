import { createDocument } from '../common/model.js';

/** @type {import('../types/model').Task[]} */
export default [
  createDocument({
    name: 'Task 1',
    description: 'Task 1 description',
    completed: false,
    dueDate: Date.now() + 1000 * 60 * 60 * 24 * 7,
    labels: ['label1', 'label2'],
  }),

  createDocument({
    name: 'Task 2',
    description: 'Task 2 description',
    completed: false,
    dueDate: Date.now() + 1000 * 60 * 60 * 24 * 3,
    labels: ['label1'],
  }),

  createDocument({
    name: 'Task 3',
    description: 'Task 3 description',
    completed: false,
    dueDate: Date.now() + 1000 * 60 * 60 * 24 * 7,
    labels: ['label2', 'label3'],
  }),

  createDocument({
    name: 'Task 4',
    description: 'Task 4 description',
    completed: false,
    dueDate: Date.now() + 1000 * 60 * 60 * 24 * 10,
    labels: ['label3'],
  }),

  createDocument({
    name: 'Task 5',
    description: 'Task 5 description',
    completed: true,
    dueDate: Date.now() + 1000 * 60 * 60 * 24 * 1,
    labels: ['label2'],
  }),
];
