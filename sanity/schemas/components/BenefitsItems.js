import { countItems } from '../../utils/count-items';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Zalety';
const icon = () => '👍';

export default {
  name: 'BenefitsItems',
  type: 'object',
  title: 'Zalety',
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
          type: 'BenefitsItems_List',
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: countItems(list.length),
        icon,
      };
    },
  },
};

export const BenefitsItems_List = {
  name: 'BenefitsItems_List',
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
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      paragraph: 'paragraph',
      media: 'icon',
    },
    prepare({ paragraph, media }) {
      return {
        title: `${removeMarkdown(paragraph)}`,
        media,
      };
    },
  },
};
