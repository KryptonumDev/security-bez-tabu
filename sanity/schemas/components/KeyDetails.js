import { countItems } from '../../utils/count-items';
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Kluczowe informacje';
const icon = () => '✅';

export default {
  name: 'KeyDetails',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [{
        type: 'KeyDetails_List'
      }],
      title: 'Lista',
    },
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare({ list }) {
      return {
        title: `[${title}] - ${countItems(list.length)}`,
        icon,
      }
    },
  },
}

export const KeyDetails_List = {
  name: 'KeyDetails_List',
  type: 'object',
  title: 'Lista kluczowych informacji',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
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
