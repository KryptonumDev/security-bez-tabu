import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'Benefits',
  title: 'Zalety',
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
      of: [
        {
          type: 'list_TitleDescriptionAndImage',
        },
      ],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Zalety] - ${removeMarkdown(title)}`,
      }
    },
  },
}
