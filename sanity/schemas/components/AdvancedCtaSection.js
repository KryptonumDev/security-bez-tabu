import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'AdvancedCtaSection',
  type: 'object',
  title: 'Rozbudowana sekcja z wezwaniem do działania',
  fields: [
    {
      name: 'advancedCtaSection_LeftSide',
      type: 'advancedCtaSection_LeftSide',
      title: 'Lewa strona',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'advancedCtaSection_RightSide',
      type: 'advancedCtaSection_RightSide',
      title: 'Prawa strona',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'advancedCtaSection_LeftSide.heading',
    },
    prepare({heading}) {
      return {
        title: `[Rozbudowana sekcja z wezwaniem do działania] - ${removeMarkdown(heading)}`,
      }
    },
  },
}

export const advancedCtaSection_LeftSide = {
  name: 'advancedCtaSection_LeftSide',
  type: 'object',
  title: 'Lewa strona',
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
  ],
}

export const advancedCtaSection_RightSide = {
  name: 'advancedCtaSection_RightSide',
  type: 'object',
  title: 'Prawa strona',
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
      title: 'Opis (opcjonalnie)',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie (opcjonalne), obok informacji',
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje ',
      validation: (Rule) => Rule.required(),
    },
  ],
}
