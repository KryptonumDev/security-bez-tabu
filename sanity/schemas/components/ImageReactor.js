import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja ze zdjęciem z reaktorem'
const icon = () => '🖼️'

export default {
  name: 'ImageReactor',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy sekcja jest wyróżniona?',
      description: 'Jeśli zaznaczone, sekcja będzie wyróżniona tłem',
    },
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
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania (opcjonalne)',
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje (opcjonalne)',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
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