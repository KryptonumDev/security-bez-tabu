const title = 'Zbiór opinii';
const icon = () => '🗣️';

export default {
  name: 'reviews_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'question',
      type: 'markdown',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: Rule => Rule.required(),
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
