import {defineType, defineField} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    // Main image
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
    // What we do (Swedish)
    defineField({
      name: 'whatWeDoSv',
      title: 'What We Do (Swedish)',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Heading', value: 'h1'},
        ],
      }],
    }),
    // What we do (English)
    defineField({
      name: 'whatWeDoEn',
      title: 'What We Do (English)',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Heading', value: 'h1'},
        ],
      }],
    }),
    // Section images
    defineField({
      name: 'filmImage',
      title: 'Film Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'castingImage',
      title: 'Casting Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bookImage',
      title: 'Book Image',
      type: 'image',
      options: {hotspot: true},
    }),
    // Who are we image
    defineField({
      name: 'whoAreWeImage',
      title: 'Who Are We Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {media: 'mainImage'},
    prepare(selection) {
      return {title: 'Home', media: selection.media}
    },
  },
})
