import {defineType, defineField} from 'sanity'

export const book = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'project'}]},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Book'}
    },
  },
})
