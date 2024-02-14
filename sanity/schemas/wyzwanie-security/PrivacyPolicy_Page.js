export default {
  name: 'WyzwanieSecurity_PrivacyPolicyPage',
  title: 'Polityka prywatności',
  type: 'document',
  icon: () => '📑',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
      validation: Rule => Rule.required(),
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: { collapsible: true }
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}