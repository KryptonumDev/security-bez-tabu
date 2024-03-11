import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Newsletter';
const icon = '🗞️';

export default {
  name: 'Newsletter',
  title,
  icon: () => icon,
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
        title: `[${title}] - ${removeMarkdown(heading)}`,
        icon: () => icon,
      }
    },
  },
}
