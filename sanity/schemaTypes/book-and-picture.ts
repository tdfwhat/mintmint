import {defineType, defineField} from 'sanity'

export const bookAndPicture = defineType({
  name: 'book-and-picture',
  title: 'Book & Picture',
  type: 'document',
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
          options: {
            filter: 'projectType == "book-and-picture"',
          },
        },
      ],
    }),
    defineField({
      name: 'contentSv',
      title: 'Content (Swedish)',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Heading', value: 'h1'},
        ],
      }],
    }),
    defineField({
      name: 'contentEn',
      title: 'Content (English)',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Heading', value: 'h1'},
        ],
      }],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Book & Picture'}
    },
  },
})
