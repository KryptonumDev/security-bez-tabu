import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'ListPillWithIconHeading',
  title: 'Lista z owalną ikoną i nagłówkiem',
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
      of: [{type: 'TitleDescriptionAndImage_Item'}],
      title: 'lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[Lista z owalną ikoną i nagłówkiem] - ${removeMarkdown(heading)}`,
      }
    },
  },
}
