import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'HeadingGrid',
  type: 'object',
  title: 'Nagłówek z siatką',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'TitleDescriptionAndImage_Item' }],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[Nagłówek z siatką] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
