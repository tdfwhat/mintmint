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
  ],
  preview: {
    prepare() {
      return {title: 'Book & Picture'}
    },
  },
})
