import {removeMarkdown} from '../../utils/remove-markdown'

const icon = () => '👍'
const title = 'Zalety'

export default {
  name: 'BenefitsItems',
  title: 'Zalety',
  type: 'object',
  icon,
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
          type: 'BenefitsItems_List',
        },
      ],
      title: 'Lista',
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

export const BenefitsItems_List = {
  name: 'BenefitsItems_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
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
      paragraph: 'paragraph',
      media: 'icon',
    },
    prepare({paragraph, media}) {
      return {
        title: `${removeMarkdown(paragraph)}`,
        media,
      }
    },
  },
}
