import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Lista cech z ikonami i nagłówkiem';
const icon = () => '📝';

export default {
  name: 'TraitsListWithIcons',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{
        type: 'TraitsListWithIcons_List'
      }],
      title: 'lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: `${list.length || 0} elementów`,
        icon,
      }
    },
  },
}

export const TraitsListWithIcons_List = {
  name: 'TraitsListWithIcons_List',
  title: 'Lista',
  type: 'object',
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
      media: 'icon',
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ media, title, subtitle }) {
      return {
        title,
        subtitle: removeMarkdown(subtitle),
        media,
      }
    },
  },
}
