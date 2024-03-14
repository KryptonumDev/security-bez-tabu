import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Opinie'
const icon = () => '🗣️'

export default {
  name: 'Reviews',
  title: title,
  type: 'object',
  icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'reviews_Collection'
        },
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        icon,
      }
    },
  },
}
