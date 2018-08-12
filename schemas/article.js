export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'teaser',
            title: 'Teaser',
            type: 'reference',
            to: {type: 'articleTeaser'}
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
            title: 'teaser.title'
        }
    }
}
