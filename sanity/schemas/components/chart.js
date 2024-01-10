export const chart_Bars = {
  name: "chart_Bars",
  title: "Wykresy słupkowe",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'charts',
      type: 'array',
      of: [
        {
          type: 'chart_Item'
        }
      ],
      validation: Rule => Rule.required().max(7),
      title: 'Elementy wykresu',
    },
  ],
  preview: {
    select: {
      title: 'title',
      charts: 'charts'
    },
    prepare({ title, charts }) {
      return {
        title: title,
        subtitle: `Elementów wykresu: ${charts.length}`,
      }
    }
  }
}

export const chart_Linear = {
  name: "chart_Linear",
  title: "Wykres liniowy",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'item',
      type: 'chart_Item',
      title: 'Element wykresu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'isAngle',
      type: 'boolean',
      title: 'Wykres pod skosem?',
      inifialValue: false,
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      item: 'item'
    },
    prepare({ title, item }) {
      return {
        title: title,
        subtitle: `${item.title} - ${item.number} %`,
      }
    }
  }
}

export const chart_Circle = {
  name: "chart_Circle",
  title: "Wykres kołowy",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'item',
      type: 'chart_Item',
      title: 'Element wykresu',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      item: 'item'
    },
    prepare({ title, item }) {
      return {
        title: title,
        subtitle: `${item.title} - ${item.number} %`,
      }
    }
  }
}

export const chart_Item = {
  name: "chart_Item",
  title: "Element wykresu",
  type: "object",
  fields: [
    {
      name: 'number',
      type: 'number',
      title: 'Procent',
      validation: Rule => Rule.required().min(0).max(100),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      number: 'number',
      title: 'title'
    },
    prepare({ number, title }) {
      return {
        title: `${number} %`,
        subtitle: title,
      }
    }
  }
}