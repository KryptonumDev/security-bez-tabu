import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Sekcja z ikoną w kształcie odznaki'
const icon = () => '🏅'

export default {
  name: 'BadgeIconSection',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: (Rule) => Rule.required(),
    },
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
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        icon,
      }
    },
  },
}
