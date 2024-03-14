import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Zalety w tle';
const icon = () => '👍';

export default {
  name: 'BenefitsBackgroundItems',
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'BenefitsBackgroundItems_List',
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'list',
    },
    prepare({ heading, subtitle }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: `ilość elementów: ${subtitle.length}`,
      };
    },
  },
};

export const BenefitsBackgroundItems_List = {
  name: 'BenefitsBackgroundItems_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
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
      title: 'title',
      paragraph: 'paragraph',
      media: 'icon',
    },
    prepare({ paragraph, media, title }) {
      return {
        title: `${removeMarkdown(title)}`,
        subtitle: removeMarkdown(paragraph),
        media,
      };
    },
  },
};
