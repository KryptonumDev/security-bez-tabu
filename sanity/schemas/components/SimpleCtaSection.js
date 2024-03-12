import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Prosta sekcja z wezwaniem do działania'
const icon = () => '📣'

export default {
  name: 'SimpleCtaSection',
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
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: Rule => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje (opcjonalnie)',
    },
    {
      name: 'isCountdown',
      type: 'boolean',
      title: 'Widoczne odliczanie czasu',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      cta: 'cta',
    },
    prepare({ heading, cta }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: `${cta.text || "'BrakTekstu'"} linkujące do ${cta.href || "'Brak linka'"}`,
        icon,
      }
    },
  },
}
