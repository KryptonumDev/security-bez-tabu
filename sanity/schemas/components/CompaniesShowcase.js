import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'CompaniesShowcase',
  title: 'Przedstawienie firm',
  type: 'object',
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
      of: [{ type: 'ImageAndLink_Item' }],
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
        title: `[Przedstawienie firm] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
