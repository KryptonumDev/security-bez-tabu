import removeMarkdown from "../../utils/removeMarkdown"

export default {
  name: "CtaSection",
  title: "Sekcja z wezwaniem do działania",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required()
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: Rule => Rule.required()
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
      validation: Rule => Rule.required()
    },
    {
      name: 'isCountdown',
      type: 'boolean',
      title: 'Widoczne odliczanie czasu',
      initialValue: true,
      validation: Rule => Rule.required()
    },
    {
      name: 'isCountdown',
      type: 'boolean',
      title: 'Widoczne odliczanie czasu',
      initialValue: true,
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      cta: 'cta',
      isCountdown: 'isCountdown'
    },
    prepare({ heading, cta, isCountdown }) {
      return {
        title: removeMarkdown(heading),
        subtitle: `${cta?.theme} button linked to ${cta?.href}${isCountdown && ' | Odliczanie wyświetlone'}`,
      }
    }
  }
}