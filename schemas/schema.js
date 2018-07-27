import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import code from './code'
import articleTeaser from './articleTeaser'
import article from './article'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, post, author, category, code, articleTeaser, article])
})
