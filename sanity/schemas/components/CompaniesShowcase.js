import { removeMarkdown } from '../../utils/remove-markdown'

export default {
  name: 'CompaniesShowcase',
  title: 'Przedstawienie firm',
  type: 'object',
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
      of: [{
        type: 'CompaniesShowcase_List'
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[Przedstawienie firm] - ${removeMarkdown(heading)}`,
      }
    },
  },
}

export const CompaniesShowcase_List = {
  name: 'CompaniesShowcase_List',
  title: 'Lista firm',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link (optional)',
      description: 'Relative or absolute link (https://)',
      validation: Rule =>
        Rule.custom((value) => {
          if (
            value &&
            !value.startsWith('/') &&
            !value.startsWith('https://') &&
            !value.startsWith('#')
          ) {
            return 'Incorrect URL.'
          }
          return true
        }),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'img',
    },
    prepare({ name, media }) {
      return {
        title: name,
        media,
      }
    },
  },
}
