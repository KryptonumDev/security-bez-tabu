import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Sekcja tekstowa i ikonką';
const icon = () => '🏅';

export default {
  name: 'BadgeIconSection',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
      media: 'icon',
    },
    prepare({ heading, paragraph, media }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        media,
        icon,
      };
    },
  },
};
