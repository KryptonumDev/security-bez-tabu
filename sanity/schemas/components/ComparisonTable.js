import { countItems } from '../../utils/count-items'
import { removeMarkdown } from '../../utils/remove-markdown'

const icon = () => '📐'
const title = 'Tabela porównawcza'

export default {
  name: 'ComparisonTable',
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
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'table',
      type: 'array',
      title: 'Tabela',
      of: [{
        type: 'ComparisonTable_Column'
      }],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(paragraph),
        icon,
      }
    },
  },
}

export const ComparisonTable_Column = {
  name: 'ComparisonTable_Column',
  type: 'object',
  title: 'Kolumna',
  fields: [
    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy element jest wyróżniony?',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Nazwa tabeli',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rows',
      type: 'array',
      of: [{
        type: 'ComparisonTable_Row'
      }],
      title: 'Wiersze',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      isHighlighted: 'isHighlighted',
      heading: 'heading',
      rows: 'rows',
    },
    prepare({ isHighlighted, heading, rows }) {
      return {
        title: `${isHighlighted ? '[Wyróżniony] ' : ''}${removeMarkdown(heading)}`,
        subtitle: countItems(rows.length),
      }
    },
  },
}

export const ComparisonTable_Row = {
  name: 'ComparisonTable_Row',
  type: 'object',
  title: 'Wiersz',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
}
