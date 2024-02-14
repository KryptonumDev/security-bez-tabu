export default {
  name: 'Faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{type: 'TitleAndDescription_Item'}],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {

    prepare() {
      return {
        title: `[Faq]`,
      }
    },
  },
}
