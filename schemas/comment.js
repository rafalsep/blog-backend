export default {
    name: 'comment',
    title: 'Comment',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',

        },
        {
            name: 'createdAt',
            title: 'Created at',
            type: 'datetime'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'website',
            title: 'Website',
            type: 'string'
        },
        {
            name: 'replies',
            title: 'Replies',
            type: 'array',
            of: [{type: 'comment'}]
        }
    ]
}
