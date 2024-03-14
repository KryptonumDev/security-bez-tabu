const title = 'Zbiór pytań i odpowiedzi FAQ';
const icon = () => '❓';

export default {
  name: 'faq_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Pytanie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      type: 'markdown',
      title: 'Odpowiedź',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
  },
}
