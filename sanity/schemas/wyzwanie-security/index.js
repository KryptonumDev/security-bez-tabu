export default {
  name: 'WyzwanieSecurity_IndexPage',
  title: 'Strona główna',
  type: 'document',
  icon: () => '⭐️',
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
      name: 'hero_Claim',
      type: 'string',
      title: 'Claim',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_AdditionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Zdjęcie w orbicie',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Products',
      type: 'array',
      of: [{
        type: 'list_TitleDescriptionAndImage'
      }],
      title: 'Produkty',
      fieldset: 'hero',
      validation: Rule => Rule.required().min(3).max(3),
    },
    {
      name: 'ctaSection',
      type: 'CtaSection',
      options: { collapsible: true, collapsed: true },
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