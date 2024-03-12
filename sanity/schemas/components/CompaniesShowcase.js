import { removeMarkdown } from '../../utils/remove-markdown'
import { countItems } from '../../utils/count-items'

const title = 'Przedstawienie firm';
const icon = () => '💼';

export default {
  name: 'CompaniesShowcase',
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

export const CompaniesShowcase_List = {
  name: 'CompaniesShowcase_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Logo',
      validation: Rule => Rule.required(),
    },
    {
      name: 'href',
      type: 'url',
      title: 'Link do strony (opcjonalny)',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'img',
      href: 'href',
    },
    prepare({ name, media, href }) {
      return {
        title: name,
        subtitle: href || 'Brak linka do strony firmy',
        media,
      }
    },
  },
}
