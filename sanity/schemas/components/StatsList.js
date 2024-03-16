const title = 'Statystyki';
const icon = () => '📊';

export default {
  name: 'StatsList',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{
        type: 'StatsList_List'
      }],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      stats: 'list',
    },
    prepare({ stats }) {
      return {
        title: `[${title}] - liczba statystyk: ${stats.length || 0}`,
        icon,
      };
    },
  },
};

export const StatsList_List = {
  name: 'StatsList_List',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      name: 'number',
      type: 'string',
      title: 'Liczba',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      number: 'number',
      name: 'name',
    },
    prepare({ number, name }) {
      return {
        title: number,
        subtitle: name,
      };
    },
  },
};
