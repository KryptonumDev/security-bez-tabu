import { removeMarkdown } from "../../utils/remove-markdown"

const title = 'Polityka prywatności'
const icon = '📑'

export default {
  name: 'PrivacyPolicyPage',
  title: title,
  type: 'document',
  icon: () => icon,
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'PrivacyPolicyPage_Content',
        },
      ],
      title: 'Treść',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: { collapsible: true },
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
}

export const PrivacyPolicyPage_Content = {
  name: 'PrivacyPolicyPage_Content',
  title: 'Treść polityki prywatności',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'array',
      of: [
        {
          type: 'markdown',
        },
      ],
      title: 'Opis',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title,
        subtitle: removeMarkdown(description.join(' | ')),
      }
    },
  },
}
