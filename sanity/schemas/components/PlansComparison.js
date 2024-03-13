import {removeMarkdown} from '../../utils/remove-markdown'

const icon = () => '🔍'
const title = 'Porównanie planów'

export default {
  name: 'PlansComparison',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'plans',
      type: 'array',
      of: [{type: 'PlansComparison_Plans'}],
      title: 'Plany',
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

export const PlansComparison_Plans = {
  name: 'PlansComparison_Plans',
  type: 'object',
  title: 'Plany',
  fields: [
    {
      name: 'isMostPopular',
      type: 'boolean',
      title: 'Wyróżnij jako najbardziej popularny',
      initialValue: false,
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Cena',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Cechy',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'price',
    },
    prepare({heading, subtitle}) {
      return {
        title: `${removeMarkdown(heading)}`,
        subtitle: `Cena wynozi ${subtitle} zł`,
      }
    },
  },
}
