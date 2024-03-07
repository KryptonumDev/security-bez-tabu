import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'HeroColumnWithImageReactor',
  title: 'Sekcja wstępna z kolumną i obrazem',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie w orbicie',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[Sekcja wstępna z kolumną i obrazem] - ${removeMarkdown(heading)} - ${removeMarkdown(paragraph)}`,
      }
    },
  },
}
