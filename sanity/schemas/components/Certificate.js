import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Certyfikat'
const icon = () => '📜'

export default {
  name: 'Certificate',
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
      name: 'cta',
      type: 'cta',
      title: 'CTA (opcjonalne)',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'dodatkowe informacje (opcjonalne)',
    },
    {
      name: 'imageReactor',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Jest wyróżniony?',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[Certyfikat] - ${removeMarkdown(title)}`,
        icon,
      }
    },
  },
}
