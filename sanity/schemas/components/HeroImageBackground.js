import { removeMarkdown } from "../../utils/remove-markdown"

const icon = () => '⭐️';
const title = `Sekcja HERO (${icon()}) ze zdjęciem w tle`;

export default {
  name: 'HeroImageBackground',
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
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
      media: 'img',
    },
    prepare({ heading, paragraph, media }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        media,
        icon,
      }
    },
  },
}
