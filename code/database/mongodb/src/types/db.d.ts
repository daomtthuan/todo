import type { Collection, Db } from 'mongodb';

import type { Document } from '../common/model';

/**
 * Execute database handle
 *
 * @param database Database
 */
export type ExecuteDatabaseHandle = (database: Db) => Promise<void>;

/**
 * Execute collection handle
 *
 * @template TDocument
 *
 * @param collection Collection
 */
export type ExecuteCollectionHandle<TDocument extends Document> = (collection: Collection<TDocument>) => Promise<void>;
