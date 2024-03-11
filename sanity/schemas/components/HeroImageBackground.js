import { removeMarkdown } from "../../utils/remove-markdown"

export default {
  name: 'HeroImageBackground',
  title: 'Sekcja wstępna ze zdjęciem w tle',
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
    prepare({ heading }) {
      return {
        title: `[Sekcja Sekcja wstępna ze zdjęciem w tle] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
