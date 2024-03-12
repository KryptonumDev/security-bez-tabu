import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z wezwaniem do działania'
const icon = () => '📣'

export default {
  name: 'SimpleCtaSection',
  title: title,
  icon,
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
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
      type: 'markdown',
      title: 'Dodatkowe informacje',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isCountdown',
      type: 'boolean',
      title: 'Widoczne odliczanie czasu',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      cta: 'cta',
      isCountdown: 'isCountdown',
    },
    prepare({ heading, cta, isCountdown }) {
      return {
        title: `[Wezwanie do działania] - ${removeMarkdown(heading)}`,
        subtitle: `Przycisk zalinkowany do ${cta?.href} ${isCountdown ? ' | Odliczanie wyświetlone' : ''}`,
        icon,
      }
    },
  },
}
