import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z filmem'
const icon = () => '🎬'

export default {
  name: 'VideoSection',
  type: 'object',
  title,
  icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'video',
      type: 'file',
      title: 'Plik wideo',
      description: 'Skompresowany film w formacie .mp4',
      validation: Rule =>
        Rule.custom(({ asset: { _ref } }) => {
          if (!_ref.includes('mp4')) {
            return 'Plik musi być w formacie .mp4'
          }
          return true
        }).required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        icon,
      }
    },
  },
}
