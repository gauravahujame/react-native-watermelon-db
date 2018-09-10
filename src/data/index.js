import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './schema';
import Post from './models/post'
import Comment from './models/comment'


const adapter = new SQLiteAdapter({
    dbName: 'WatermelonDemo',
    schema: schema,
})

export default database = new Database({
    adapter,
    modelClasses: [Post, Comment],
})
