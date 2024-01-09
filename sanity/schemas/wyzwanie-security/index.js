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
      name: 'benefits_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'benefits',
    },
    {
      name: 'benefits_List',
      type: 'array',
      of: [{
        type: 'list_TitleDescriptionAndImage'
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
      fieldset: 'benefits',
    },
    {
      name: 'perks_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'perks',
    },
    {
      name: 'perks_List',
      type: 'array',
      of: [{
        type: 'list_TitleAndDescription'
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
      fieldset: 'perks',
    },
    {
      name: 'ctaSection',
      type: 'CtaSection',
      options: { collapsible: true, collapsed: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'stats_List',
      type: 'array',
      of: [{
        type: 'stats'
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
      fieldset: 'stats',
    },
    {
      name: 'recipients_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'recipients',
    },
    {
      name: 'recipients_List',
      type: 'array',
      of: [{
        type: 'list_TitleAndImage'
      }],
      title: 'List',
      validation: Rule => Rule.required(),
      fieldset: 'recipients',
    },
    {
      name: 'reviews_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'reviews',
    },
    {
      name: 'reviews_List',
      type: 'array',
      of: [{ type: 'review' }],
      title: 'List',
      validation: Rule => Rule.required(),
      fieldset: 'reviews',
    },
    {
      name: 'idea_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'idea',
    },
    {
      name: 'idea_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'idea',
    },
    {
      name: 'idea_Claim',
      type: 'markdown',
      title: 'Claim',
      validation: Rule => Rule.required(),
      fieldset: 'idea',
    },
    {
      name: 'idea_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'idea',
      validation: Rule => Rule.required(),
    },
    {
      name: 'idea_AdditionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje',
      fieldset: 'idea',
      validation: Rule => Rule.required(),
    },
    {
      name: 'idea_ChartParagraph',
      type: 'markdown',
      title: 'Paragraf nad wykresem',
      fieldset: 'idea',
      validation: Rule => Rule.required(),
    },
    {
      name: 'idea_Chart',
      type: 'array',
      of: [
        {
          type: 'list_TitleAndDescription'
        }
      ],
      title: 'Wykres',
      fieldset: 'idea',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lessons_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'lessons',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lessons_Paragraph',
      type: 'markdown',
      title: 'Pragraf',
      fieldset: 'lessons',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lessons_List',
      type: 'array',
      of: [{
        type: 'chapter'
      }],
      title: 'Lista',
      fieldset: 'lessons',
      validation: Rule => Rule.required(),
    },
    {
      name: 'faq_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'faq',
    },
    {
      name: 'faq_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'faq',
    },
    {
      name: 'faq_List',
      type: 'array',
      of: [{
        type: 'list_TitleAndDescription'
      }],
      title: 'Lista',
      validation: Rule => Rule.required(),
      fieldset: 'faq',
    },
    {
      name: 'author_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'author',
    },
    {
      name: 'author_Img',
      type: 'image',
      title: 'Zdjęcie autora',
      validation: Rule => Rule.required(),
      fieldset: 'author',
    },
    {
      name: 'author_Subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'author',
    },
    {
      name: 'author_Achievements',
      type: 'array',
      of: [{
        type: 'list_TitleAndImage'
      }],
      title: 'Osiągnięcia',
      validation: Rule => Rule.required(),
      fieldset: 'author',
    },
    {
      name: 'author_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'author',
    },
    {
      name: 'largeImage',
      type: 'image',
      title: 'Duże zdjęcie',
      validation: Rule => Rule.required(),
      fieldset: 'largeImage',
    },
    {
      name: 'charts',
      type: 'array',
      of: [
        { type: 'chart_Bars' },
        { type: 'chart_Linear' },
        { type: 'chart_Circle' },
      ],
      title: 'Wykresy',
      validation: Rule => Rule.required(),
      fieldset: 'charts',
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
    {
      name: 'benefits',
      title: 'Zalety',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'perks',
      title: 'Co zyskujesz',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'stats',
      title: 'Statystyki',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'recipients',
      title: 'Dla kogo kurs?',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'reviews',
      title: 'Opinie',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'idea',
      title: 'Pomysł na kurs',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'lessons',
      title: 'Opis programu - lekcje',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'faq',
      title: 'FAQ',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'author',
      title: 'Twórca kursu',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'largeImage',
      title: 'Duże zdjęcie',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'charts',
      title: 'Wykresy',
      options: { collapsible: true, collapsed: true }
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}