import { removeMarkdown } from '../../utils/remove-markdown'

const icon = () => '⭐️';
const title = `Sekcja HERO (${icon()}) kolumna z obrazem z reaktorem`;

export default {
  name: 'HeroColumnWithImageReactor',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: Rule => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie w orbicie',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[${title}]- ${removeMarkdown(heading)} `,
        subtitle: removeMarkdown(paragraph),
        icon,
      }
    },
  },
}
