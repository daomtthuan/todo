import type { Collection } from 'mongodb';

import type { Document } from '../common/model';

/**
 * Execute handle
 *
 * @template TDocument
 *
 * @param collection Collection
 */
export type ExecuteHandle<TDocument extends Document> = (collection: Collection<TDocument>) => Promise<void>;
