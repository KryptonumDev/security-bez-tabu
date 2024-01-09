import removeMarkdown from "../../utils/removeMarkdown"

export default {
  name: "chapter",
  title: "Rozdziały",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lessons',
      type: 'array',
      of: [{
        type: 'string'
      }],
      title: 'Lekcje',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      lessons: 'lessons',
    },
    prepare({ title, lessons }) {
      return {
        title: title,
        subtitle: removeMarkdown(lessons.join(' | ')),
      }
    }
  }
}