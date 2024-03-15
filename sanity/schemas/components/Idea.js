import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Pomysł na kurs';
const icon = () => '💡';

export default {
  name: 'Idea',
  type: 'object',
  title,
  icon,
  fields: [
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
    {
      name: 'claim',
      type: 'markdown',
      title: 'Claim',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: Rule => Rule.required(),
    },
    {
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
      validation: Rule => Rule.required(),
    },
    {
      name: 'chartParagraph',
      type: 'markdown',
      title: 'Paragraf z wykresem',
      validation: Rule => Rule.required(),
    },
    {
      name: 'chart',
      type: 'array',
      of: [{ type: 'Idea_List' }],
      title: 'Wykres',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ heading, subtitle }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: subtitle,
        icon,
      };
    },
  },
};

export const Idea_List = {
  name: 'Idea_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};
