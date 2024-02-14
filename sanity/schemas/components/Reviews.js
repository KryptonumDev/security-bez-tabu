export default {
  name: 'Reviews',
  title: 'Opinie',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{type: 'review'}],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `[Opinie]`,
      }
    },
  },
}
