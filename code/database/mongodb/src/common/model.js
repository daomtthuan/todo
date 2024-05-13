import { ObjectId } from 'mongodb';

/**
 * Create document
 *
 * @template {import('../types/model').Document} TDocument
 *
 * @param {TDocument} document Document
 *
 * @returns {import('../types/model').Model<TDocument>} Document
 */
export function createDocument(document) {
  return {
    ...document,
    _id: new ObjectId(),
    _deleted: false,
    _createdDate: Date.now(),
    _modifiedDate: Date.now(),
  };
}

/**
 * Create document
 *
 * @template {import('../types/model').Document} TDocument
 *
 * @param {import('../types/model').Model<TDocument>} document Document
 *
 * @returns {import('../types/model').Model<TDocument>} Document
 */
export function updateDocument(document) {
  return {
    ...document,
    _modifiedDate: Date.now(),
  };
}

/**
 * Create document
 *
 * @template {import('../types/model').Document} TDocument
 *
 * @param {import('../types/model').Model<TDocument>} document Document
 *
 * @returns {import('../types/model').Model<TDocument>} Document
 */
export function deleteDocument(document) {
  return {
    ...document,
    _deleted: true,
  };
}
