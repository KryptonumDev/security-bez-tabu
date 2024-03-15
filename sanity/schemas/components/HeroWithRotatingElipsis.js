import { removeMarkdown } from '../../utils/remove-markdown';

const icon = () => '⭐️';
const title = `Sekcja HERO (${icon()}) z orbitami i zdjęciem`;

export default {
  name: 'HeroWithRotatingElipsis',
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
      type: 'string',
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
      name: 'img',
      type: 'image',
      title: 'Zdjęcie w orbicie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'HeroWithRotatingElipsis_Products',
        },
      ],
      title: 'Produkty',
      validation: Rule => Rule.required().min(3).max(3),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        icon,
      };
    },
  },
};

export const HeroWithRotatingElipsis_Products = {
  name: 'HeroWithRotatingElipsis_Products',
  title: 'Produkty',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'img',
    },
    prepare({ title, description, image }) {
      return {
        title: title,
        subtitle: description,
        media: image,
      };
    },
  },
};
