export default {
  name: 'Charts',
  title: 'Wykresy',
  type: 'object',
  fields: [
    {
      name: 'charts',
      title: 'Wykresy',
      type: 'array',
      of: [
        {
          type: 'chart_Bars',
        },
        {
          type: 'chart_Linear',
        },
        {
          type: 'chart_Circle',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: `[Wykresy]`,
      }
    },
  },
}
