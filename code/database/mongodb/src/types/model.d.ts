import type { BSON, ObjectId } from 'mongodb';

/** Document */
export type Document = BSON.Document;

/**
 * Tracking document
 *
 * @template TDocument
 */
export type Tracking<TDocument extends Document> = TDocument & {
  /** Created date */
  _createdDate: number;

  /** Modified date */
  _modifiedDate: number;
};

/**
 * Model
 *
 * @template TDocument
 */
export type Model<TDocument extends Document> = TDocument &
  Tracking<{
    /** Id */
    _id: ObjectId;

    /** Is deleted */
    _deleted: boolean;
  }>;

/** Task */
export type Task = Model<{
  /** Task name */
  name: string;

  /** Task description */
  description: string;

  /** Is completed */
  completed: boolean;

  /** Due date */
  dueDate: number;

  /** Labels */
  labels: string[];
}>;
