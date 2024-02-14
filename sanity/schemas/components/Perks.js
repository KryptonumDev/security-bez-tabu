import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'Perks',
  title: 'Co zyskujesz',
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
          type: 'TitleAndDescription_Item',
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
        title: `[Co zyskujesz] - ${removeMarkdown(title)}`,
      }
    },
  },
}
