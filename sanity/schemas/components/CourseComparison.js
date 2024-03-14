import {removeMarkdown} from '../../utils/remove-markdown'

const icon = () => '📊'
const title = 'Porównanie kursów'

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
      subtitle: 'paragraph',
    },
    prepare({heading, subtitle}) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: subtitle,
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
      of: [{type: 'CourseComparison_List'}],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
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

export const CourseComparison_List = {
  name: 'CourseComparison_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'name',
      type: 'markdown',
      title: 'Nazwa',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isPositive',
      type: 'boolean',
      title: 'Czy jest pozytywny?',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({name}) {
      return {
        title: `${removeMarkdown(name)}`,
      }
    },
  },
}
