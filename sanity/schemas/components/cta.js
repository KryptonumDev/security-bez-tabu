export default {
  name: "cta",
  title: "Wezwanie do działania",
  type: "object",
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Tekst, który będzie wyświetlany na przycisku',
      validation: Rule => Rule.required()
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Link relatywny lub absolutny (rozpoczynający się od https://)',
      validation: Rule => Rule.custom(value => {
        if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
          return 'Nieprawidłowy adres URL.';
        }
        return true;
      }).required(),
    }
  ],
  preview: {
    select: {
      title: 'text',
      href: 'href'
    },
    prepare({ title, href }) {
      return {
        title: title,
        subtitle: `prowadzi do ${href}`,
      }
    }
  }
}