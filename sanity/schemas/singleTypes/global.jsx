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
      type: 'global_OrganizationSchema',
      name: 'OrganizationSchema',
      title: 'Uporządkowane dane organizacji',
      description: (
        <a
          href='https://developers.google.com/search/docs/appearance/structured-data/organization?hl=pl'
          target='_blank'
          rel='noreferrer'
        >
          Więcej informacji o Schema
        </a>
      ),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'CookieConsent',
      type: 'CookieConsent',
      title: 'Baner z informacją o ciasteczkach',
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
};

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
};

export const global_OrganizationSchema = {
  name: 'global_OrganizationSchema',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa Twojej organizacji',
    },
    {
      name: 'description',
      type: 'text',
      rows: 3,
      title: 'Szczegółowy opis Twojej organizacji',
    },
  ],
};
