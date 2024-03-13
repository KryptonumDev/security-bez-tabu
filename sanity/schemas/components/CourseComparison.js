import {removeMarkdown} from '../../utils/remove-markdown'

const icon = () => '📊'
const title = 'Porównanie kursów'

export default {
  title,
  name: 'CourseComparison',
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
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'plans',
      type: 'array',
      of: [{type: 'CourseComparison_Plans'}],
      title: 'Plany',
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

export const CourseComparison_Plans = {
  name: 'CourseComparison_Plans',
  type: 'object',
  title: 'Plany',
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
      of: [{type: 'string'}],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'positive',
      type: 'boolean',
      title: 'Czy jest pozytywny?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `${removeMarkdown(heading)}`,
      }
    },
  },
}