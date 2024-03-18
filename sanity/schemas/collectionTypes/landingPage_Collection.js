import { slugify } from '../../utils/slugify'

export default {
  name: 'landingPage_Collection',
  title: 'Strony lądowania',
  type: 'document',
  icon: () => '🛬',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      description: 'Do adresu URL zostanie dodany automatycznie prefix "/landing" - np. "/landing/twoj-slug"',
      options: {
        source: 'name',
        slugify: (input) => `${slugify(input)}`,
      },
      validation: Rule => {
        Rule.custom(({ current: slug }) => {
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            return 'Slug może zawierać tylko małe litery, cyfry oraz myślniki. Upewnij się, że nie zawiera on znaków specjalnych ani wielkich liter.'
          }
          return true
        }).required()
      },
    },
    {
      name: 'countdown_Date',
      type: 'datetime',
      title: 'Data do odliczania (opcjonalnie)',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Globalne wezwanie do działania (np. w nawigacji)',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
}
