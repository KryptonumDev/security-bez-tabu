import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Szczegóły kursu'
const icon = () => '📚'

export default {
  name: 'CourseDetails',
  title,
  type: 'object',
  icon,
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
      title: 'Lista',
      of: [{type: 'CourseDetails_List'}],
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

export const CourseDetails_List = {
  type: 'object',
  name: 'CourseDetails_List',
  title: 'Lista',
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
      name: 'duration',
      type: 'string',
      title: 'Czas (w godzinach, opcjonalne)',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({heading, paragraph}) {
      return {
        title: `${removeMarkdown(heading)}`,
        subtitle: `${removeMarkdown(paragraph)}`,
      }
    },
  },
}
