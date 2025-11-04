import {defineType, defineField} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Film', value: 'film'},
          {title: 'Event', value: 'event'},
          {title: 'Casting', value: 'casting'},
          {title: 'Book and Picture', value: 'book-and-picture'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
    }),
    defineField({
      name: 'descriptionSv',
      title: 'Description (Swedish)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {layout: 'grid'},
    }),
  ],
  preview: {
    select: {title: 'title', media: 'mainImage'},
  },
})
