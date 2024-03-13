import { countItems } from '../../utils/count-items'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Szczegółowa lista numerowana'
const icon = () => '🔢'

export default {
  name: 'DetailedOrderedList',
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
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek (opcjonalne)',
    },
    {
      name: 'list',
      type: 'array',
      of: [{
        type: 'DetailedOrderedList_List'
      }],
      title: 'Lista',
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
        subtitle: countItems(list.length),
        icon,
      }
    },
  },
}

export const DetailedOrderedList_List = {
  name: 'DetailedOrderedList_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
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
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    },
  },
}
