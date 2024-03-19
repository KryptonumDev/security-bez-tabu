const title = 'Globalne';
const icon = () => '🌍';

export default {
  name: 'global',
  type: 'document',
  title,
  icon,
  fields: [
    {
      type: 'string',
      name: 'email',
      title: 'Email',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'phone',
      title: 'Phone number',
    },
    {
      type: 'url',
      name: 'instagram',
      title: 'Instagram',
      fieldset: 'social',
    },
    {
      type: 'url',
      name: 'facebook',
      title: 'Facebook',
      fieldset: 'social',
    },
    {
      type: 'url',
      name: 'youtube',
      title: 'YouTube',
      fieldset: 'social',
    },
    {
      type: 'url',
      name: 'linkedin',
      title: 'LinkedIn',
      fieldset: 'social',
    },
    {
      name: 'CookieConsent',
      type: 'CookieConsent',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
  ],
  fieldsets: [
    {
      name: 'social',
      title: 'Linki do mediów społecznościowych',
      options: { collapsible: true, collapsed: true },
    },
  ],
}

export const global_Seo = {
  name: 'global_Seo',
  title: 'Global SEO',
  type: 'object',
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description:
        'Obraz widoczny podczas udostępniania strony w mediach społecznościowych. Zdjęcie powinno być w formacie PNG. Wymiary zdjęcia powinny wynosić 1200x630px.',
    },
  ],
}
