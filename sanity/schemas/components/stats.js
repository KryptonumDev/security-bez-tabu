export default {
  name: "stats",
  title: "Statystki",
  type: "object",
  fields: [
    {
      name: 'number',
      type: 'string',
      title: 'Liczba',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      type: 'string',
      title: 'Opis',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      number: 'number',
      name: 'name',
      position: 'position'
    },
    prepare({ number, name }) {
      return {
        title: number,
        subtitle: name,
      }
    }
  }
}