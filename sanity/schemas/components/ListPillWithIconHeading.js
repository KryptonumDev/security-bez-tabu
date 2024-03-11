import {removeMarkdown} from '../../utils/remove-markdown'

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
      of: [{type: 'ListPillWithIconHeading_List'}],
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

export const ListPillWithIconHeading_List = {
  name: 'ListPillWithIconHeading_List',
  title: 'Lista z owalną ikoną',
  type: 'object',
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
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'img',
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
