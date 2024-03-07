import { removeMarkdown } from "../../utils/remove-markdown"

export default {
  name: 'Certificate',
  title: 'Certyfikat',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `[Certyfikat] - ${removeMarkdown(title)}`,
      }
    },
  },
}
