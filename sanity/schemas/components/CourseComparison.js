import { removeMarkdown } from '../../utils/remove-markdown'
import { countItems } from '../../utils/count-items'

const title = 'Porównanie kursów'
const icon = () => '📊'

export default {
  name: 'CourseComparison',
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
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'plans',
      type: 'array',
      of: [{
        type: 'CourseComparison_Plans'
      }],
      title: 'Plany',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ heading, subtitle }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(subtitle),
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
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy jest wyróżniony?',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
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
        type: 'CourseComparison_List'
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
        title: removeMarkdown(heading),
        subtitle: countItems(list.length),
      }
    },
  },
}

export const CourseComparison_List = {
  name: 'CourseComparison_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'isPositive',
      type: 'boolean',
      title: 'Czy jest pozytywny?',
      initialValue: true,
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      isPositive: 'isPositive',
      name: 'name',
    },
    prepare({ isPositive, name }) {
      return {
        title: `[${isPositive ? '+' : '-'}] - ${removeMarkdown(name)}`,
      }
    },
  },
}
