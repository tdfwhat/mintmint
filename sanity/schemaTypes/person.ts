import {defineType, defineField} from 'sanity'

export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
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
    select: {title: 'name'},
  },
})
