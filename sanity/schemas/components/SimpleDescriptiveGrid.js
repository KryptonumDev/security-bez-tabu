import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Prosta siatka z opisem'
const icon = '📊'

export default {
  name: 'SimpleDescriptiveGrid',
  type: 'object',
  title: title,
  icon: () => icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'grid',
      type: 'array',
      of: [{type: 'SimpleDescriptiveGrid_Grid'}],
      title: 'Siatka',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[Nagłówek z siatką] - ${removeMarkdown(heading)}`,
        icon: () => icon,
      }
    },
  },
}

export const SimpleDescriptiveGrid_Grid = {
  name: 'SimpleDescriptiveGrid_Grid',
  type: 'object',
  title: 'Prosta siatka z opisem',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
    prepare({title, subtitle, media}) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media,
      }
    },
  },
}
