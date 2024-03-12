import {removeMarkdown} from '../../utils/remove-markdown'

const icon = () => '❓'
const title = 'FAQ'

export default {
  name: 'Faq',
  title,
  icon,
  type: 'object',
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
    {
      name: 'list',
      type: 'array',
      of: [{type: 'Faq_List'}],
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
        title: `[Faq] - ${removeMarkdown(title)}`,
        icon,
      }
    },
  },
}

export const Faq_List = {
  name: 'Faq_List',
  type: 'object',
  title: 'Lista FAQ',
  fields: [
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
      validation: (Rule) => Rule.required(),
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
