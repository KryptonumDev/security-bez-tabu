import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'HeroCentralizedTextAndTransparentImage',
  title: 'Sekcja wstępna z wycentrowanym tekstem i przezroczystym zdjęciem',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[Sekcja wstępna z tekstem i przezroczystym zdjęciem] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
