import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Prezentacja osoby'
const icon = () => '👤'

export default {
  name: 'PersonPresentation',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie osoby',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'achievements',
      type: 'array',
      of: [{
        type: 'PersonPresentation_Achievements'
      }],
      title: 'Osiągnięcia',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      media: 'img',
    },
    prepare({ heading, subheading, media }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(subheading),
        media,
        icon,
      }
    },
  },
}

export const PersonPresentation_Achievements = {
  name: 'PersonPresentation_Achievements',
  type: 'object',
  title: 'Osiągnięcia',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'text',
      rows: 3,
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
}
