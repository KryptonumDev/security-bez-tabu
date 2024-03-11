import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'CtaSectionWithImage',
  title: 'Sekcja z wezwaniem do działania i zdjęciem',
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
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'string',
      title: 'Dodatkowe informacje',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      cta: 'cta',
    },
    prepare({ heading, cta }) {
      return {
        title: `[Sekcja z wezwaniem do działania i zdjęciem] - ${removeMarkdown(heading)}`,
        subtitle: `${cta?.theme} button linked to ${cta?.href}'}`,
      }
    },
  },
}
