export default {
  name: 'WyzwanieSecurity_Global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
    {
      name: 'robotsIndex',
      type: 'boolean',
      title: 'Indexing by SEO robots',
      description: 'If enabled SEO robots (such as Google) will be able to index the site in search engines.'
    },
  ],
}