import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Ukryte zdjęcie, które można odkryć';
const icon = () => '👁️';

export default {
  name: 'RevealImage',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie do odkrycia',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph'
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        icon,
      }
    },
  },
}
