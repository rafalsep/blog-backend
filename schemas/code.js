export default {
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Javascript', value: 'javascript' },
          { title: 'Java', value: 'java' }
        ]
      }
    },
    {
      name: 'snippet',
      title: 'Snippet',
      type: 'text'
    }
  ]
}
