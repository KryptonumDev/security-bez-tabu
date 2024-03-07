import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'HeroWithRotatingElipsis',
  title: 'Sekcja wstępna z obrazem i orbitami',
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
      type: 'string',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie w orbicie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'TitleDescriptionAndImage_Item',
        },
      ],
      title: 'Produkty',
      validation: (Rule) => Rule.required().min(3).max(3),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[Sekcja wstępna z obrazem i orbitami] - ${removeMarkdown(heading)} - ${removeMarkdown(paragraph)}`,
      }
    },
  },
}
