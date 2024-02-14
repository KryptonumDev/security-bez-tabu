import removeMarkdown from "../../utils/removeMarkdown"

export const titleAndDescription = {
  name: "TitleAndDescription_Item",
  title: "Title and Description",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}

export const titleAndImage = {
  name: "TitleAndImage_Item",
  title: "Title & Image",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    },
    prepare({ title, media }) {
      return {
        title: removeMarkdown(title),
        media
      }
    }
  }
}

export const imageAndLink = {
  name: "ImageAndLink_Item",
  title: "Title & Link",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link (optional)',
      description: 'Relative or absolute link (https://)',
      validation: Rule => Rule.custom(value => {
        if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
          return 'Incorrect URL.';
        }
        return true;
      }),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'img'
    },
    prepare({ name, media }) {
      return {
        title: name,
        media
      }
    }
  }
}

export const titleDescriptionAndImage = {
  name: "TitleDescriptionAndImage_Item",
  title: "Title, Description & Image",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media
      }
    }
  }
}