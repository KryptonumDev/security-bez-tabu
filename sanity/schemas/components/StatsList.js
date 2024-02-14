export default {
  name: 'StatsList',
  title: 'Statystyki',
  type: 'object',
  fields: [
    {
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [
        {
          type: 'stats',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'list',
    },
    prepare({title}) {
      return {
        title: `[Statystyki] - liczba statystyk: ${title.length}`,
      }
    },
  },
}
