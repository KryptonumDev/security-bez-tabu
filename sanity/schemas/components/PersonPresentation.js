import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Prezentacja osoby'
const icon = () => '👤'

export default {
  name: 'PersonPresentation',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie osoby',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'achievements',
      type: 'array',
      of: [{type: 'PersonPresentation_Achievements'}],
      title: 'Osiągnięcia',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Prezentacja osoby] - ${removeMarkdown(title)}`,
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'description',
      media: 'icon',
    },
    prepare({title, media}) {
      return {
        title: removeMarkdown(title),
        media,
      }
    },
  },
}
