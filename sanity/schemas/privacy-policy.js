import removeMarkdown from "../utils/removeMarkdown"

export default {
  name: 'PrivacyPolicyPage',
  title: 'Globalna polityka prywatności',
  type: 'document',
  icon: () => '📑',
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [{
        type: 'PrivacyPolicyPage_Content'
      }],
      title: 'Treść',
      validation: Rule => Rule.required(),
    },
  ],
}

export const PrivacyPolicyPage_Content = {
  name: "PrivacyPolicyPage_Content",
  title: "Treść polityki prywatności",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'array',
      of: [{
        type: 'markdown'
      }],
      title: 'Opis',
      validation: Rule => Rule.required(),
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
    }
  }
}