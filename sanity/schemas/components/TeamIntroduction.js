import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Przedstawienie zespołu'
const icon = () => '👥'

export default {
  name: 'TeamIntroduction',
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
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{
        type: 'TeamIntroduction_List'
      }],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        icon,
      }
    },
  },
}

export const TeamIntroduction_List = {
  name: 'TeamIntroduction_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Imię i nazwisko',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Opis (opcjonalne)',
    },
  ],
}
