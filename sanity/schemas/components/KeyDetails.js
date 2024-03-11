import {removeMarkdown} from '../../utils/remove-markdown'

export default {
  name: 'KeyDetails',
  type: 'object',
  title: 'Kluczowe informacje',
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [{type: 'KeyDetails_List'}],
      title: 'Lista',
    },
  ],
  preview: {
    select: {
      title: 'list.0.title',
    },
    prepare({title}) {
      return {
        title: `[Kluczowe informacje] - ${title}`,
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
      name: 'title',
      type: 'markdown',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    },
  },
}
