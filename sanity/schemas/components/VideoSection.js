import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Sekcja z filmem'
const icon = () => '🎬'

export default {
  name: 'VideoSection',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'video',
      type: 'file',
      title: 'Film',
      description: 'Najlepiej skompresowany w formacie mp4',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        icon,
      }
    },
  },
}
