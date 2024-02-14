export default {
  name: 'Lessons',
  title: 'Opis programu - lekcje',
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
      of: [{type: 'chapter'}],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    prepare() {
      return {
        title: `[Opis programu - lekcje]`,
      }
    },
  },
}
