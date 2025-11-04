import { type SchemaTypeDefinition } from 'sanity'

import { person } from './person'
import { project } from './project'

import { home } from './home'
import { film } from './film'
import { event } from './event'
import { casting } from './casting'
import { bookAndPicture } from './book-and-picture'
import { contact } from './contact'
import { footer } from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    person,
    project,
    home,
    film,
    event,
    casting,
    bookAndPicture,
    contact,
    footer
  ],
}
