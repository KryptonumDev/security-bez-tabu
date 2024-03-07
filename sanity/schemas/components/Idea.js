export default {
  name: 'Idea',
  title: 'Pomysł na kurs',
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
      name: 'claim',
      type: 'markdown',
      title: 'Claim',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'chartParagraph',
      type: 'markdown',
      title: 'Paragraf z wykresem',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'chart',
      type: 'array',
      of: [{ type: 'TitleAndDescription_Item' }],
      title: 'Wykres',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `[Pomysł na kurs]`,
      }
    },
  },
}
