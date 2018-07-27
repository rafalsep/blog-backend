export default {
  name: 'articleTeaser',
  title: 'ArticleTeaser',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'body'
    }
  }
}
