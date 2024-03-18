import { countItems } from '../../utils/count-items'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Szczegóły kursu'
const icon = () => '📚'

export default {
  name: 'CourseDetails',
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
      title: 'Lista',
      of: [{
        type: 'CourseDetails_List'
      }],
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

export const CourseDetails_List = {
  type: 'object',
  name: 'CourseDetails_List',
  title: 'Lista',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Czas (opcjonalne)',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: removeMarkdown(heading),
        subtitle: removeMarkdown(paragraph),
      }
    },
  },
}
