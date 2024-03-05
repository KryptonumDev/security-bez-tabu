export default {
  name: 'KeyDetails',
  type: 'object',
  title: 'Kluczowe informacje',
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [{type: 'TitleAndDescription_Item'}],
      title: 'Lista',
    },
  ],
  preview: {
    select: {
      title: 'list.0.title',
    },
    prepare({title}) {
      return {
        title: `[Kluczowe informacje] - ${title}`,
      }
    },
  },
}
