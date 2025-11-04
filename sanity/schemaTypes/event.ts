import {defineType, defineField} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
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
            filter: 'projectType == "event"',
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Event'}
    },
  },
})
