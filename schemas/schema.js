import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import code from './code'
import articleTeaser from './articleTeaser'
import article from './article'
import comment from "./comment";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, code, articleTeaser, article, comment])
})
