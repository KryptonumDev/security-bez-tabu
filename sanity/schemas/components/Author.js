export default {
  name: 'Author',
  title: 'Twórca kursu',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie autora',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'achievements',
      type: 'array',
      of: [{ type: 'TitleAndImage_Item'}],
      title: 'osiągnięcia',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    prepare() {
      return {
        title: `[Twórca kursu]`,
      }
    },
  },
}
