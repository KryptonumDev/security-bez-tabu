import { countItems } from '../../utils/count-items';
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Prosta siatka z elementami opisowymi'
const icon = () => '📊';

export default {
  name: 'SimpleDescriptiveGrid',
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
      name: 'grid',
      type: 'array',
      of: [{
        type: 'SimpleDescriptiveGrid_Grid'
      }],
      title: 'Siatka',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      grid: 'grid',
    },
    prepare({ heading, grid }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: countItems(grid.length),
        icon,
      }
    },
  },
}

export const SimpleDescriptiveGrid_Grid = {
  name: 'SimpleDescriptiveGrid_Grid',
  type: 'object',
  title: 'Elementy',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      paragraph: 'paragraph',
      media: 'icon',
    },
    prepare({ title, paragraph, media }) {
      return {
        title,
        subtitle: removeMarkdown(paragraph),
        media,
      }
    },
  },
}
