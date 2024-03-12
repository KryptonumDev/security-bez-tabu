import {removeMarkdown} from '../../utils/remove-markdown'

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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek (opcjonalne)',
    },
    {
      name: 'list',
      type: 'array',
      of: [{type: 'DetailedOrderedList_Chapter'}],
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
        title: `[Lista numerowana] - ${removeMarkdown(title)}`,
        icon,
      }
    },
  },
}

export const DetailedOrderedList_Chapter = {
  name: 'DetailedOrderedList_Chapter',
  type: 'object',
  title: 'Rozdziały',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
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
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
}
