import {defineType, defineField} from 'sanity'

export const film = defineType({
  name: 'film',
  title: 'Film',
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
      return {title: 'Film'}
    },
  },
})
