import {removeMarkdown} from '../../utils/remove-markdown'

const icon = () => '📣'
const title = 'Rozbudowana sekcja z wezwaniem do działania'

export default {
  name: 'AdvancedCtaSection',
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
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondHeading',
      type: 'markdown',
      title: 'Drugi nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'string',
      title: 'Dodatkowe informacje',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[Rozbudowana sekcja z wezwaniem do działania] - ${removeMarkdown(heading)}`,
        icon,
      }
    },
  },
}
