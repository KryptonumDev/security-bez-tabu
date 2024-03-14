import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Opisowe przedstawienie firm'
const icon = () => '🏢'

export default {
  name: 'CompaniesDescriptiveShowcase',
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
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{type: 'CompaniesDescriptiveShowcase_List'}],
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

export const CompaniesDescriptiveShowcase_List = {
  title: 'Lista',
  name: 'CompaniesDescriptiveShowcase_List',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      type: 'string',
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
}
