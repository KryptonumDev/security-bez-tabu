import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'RevealImage',
  type: 'object',
  title: 'Seckja z odkrywalnym zdjęciem',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie do odkrycia',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[Sekcja z odkrywalnym zdjęciem] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
