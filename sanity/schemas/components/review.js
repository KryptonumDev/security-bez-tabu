export default {
  name: "review",
  title: "Opinia",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie (opcjonalnie)',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Imię i nazwisko',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      type: 'string',
      title: 'Stanowisko (opcjonlanie)',
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Treść',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      img: 'img',
      name: 'name',
      position: 'position'
    },
    prepare({ img, name, position }) {
      return {
        title: name,
        subtitle: position,
        media: img,
      }
    }
  }
}