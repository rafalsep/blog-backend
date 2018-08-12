export default {
    name: 'article',
    title: 'Article',
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
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'teaser',
            title: 'Teaser',
            type: 'text'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent'
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{type: 'comment'}]
        }
    ],

    preview: {
        select: {
            title: 'title'
        }
    }
}
