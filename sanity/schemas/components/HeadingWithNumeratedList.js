import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'HeadingWithNumeratedList',
  title: 'Nagłówek z listą numerowaną',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      title: 'List',
      of: [{type: 'TitleAndDescription_Item'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[Nagłówek z listą numerowaną] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
