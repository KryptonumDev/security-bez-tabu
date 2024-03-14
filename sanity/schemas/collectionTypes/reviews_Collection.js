const title = 'Zbiór opinii';
const icon = () => '🗣️';

export default {
  name: 'reviews_Collection',
  type: 'document',
  title,
  icon,
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
      name: 'text',
      type: 'markdown',
      title: 'Treść opinii',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'img'
    },
  },
}
