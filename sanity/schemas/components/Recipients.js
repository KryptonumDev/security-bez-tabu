export default {
  name: 'Recipients',
  title: 'Dla kogo kurs?',
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
      of: [
        {
          type: 'TitleAndImage_Item',
        },
      ],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare({title}) {
      return {
        title: `[Dla kogo kurs?]`,
      }
    },
  },
}
