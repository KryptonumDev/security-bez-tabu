import { removeMarkdown } from '../../utils/remove-markdown';
import { countItems } from '../../utils/count-items';

const title = 'Sekcja Zalety - kafelki z tłem';
const icon = () => '✅';

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
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: countItems(list),
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
      type: 'string',
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
    prepare({ title, paragraph, media }) {
      return {
        title,
        subtitle: removeMarkdown(paragraph),
        media,
      };
    },
  },
};
