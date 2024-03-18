import { countItems } from '../../utils/count-items';
import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Opisowe przedstawienie firm';
const icon = () => '🏢';

export default {
  name: 'CompaniesDescriptiveShowcase',
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
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{
        type: 'CompaniesDescriptiveShowcase_List'
      }],
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

export const CompaniesDescriptiveShowcase_List = {
  name: 'CompaniesDescriptiveShowcase_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Logo',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
};
