import { countItems } from '../../utils/count-items'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja FAQ'
const icon = () => '❓'

export default {
  name: 'Faq',
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
      name: 'list',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'faq_Collection',
        },
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: countItems(list.lenght),
        icon,
      }
    },
  },
}
