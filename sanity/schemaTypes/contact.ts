import { defineType, defineField } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'person' }] },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact' }
    },
  },
})
