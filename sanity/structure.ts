import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  const singletonTypes = ['home', 'film', 'event', 'casting', 'book', 'contact', 'footer'] as const

  const singletonItems = [
    S.listItem()
      .title('Home')
      .id('home')
      .child(
        S.editor()
          .id('home')
          .schemaType('home')
          .documentId('home')
      ),
    S.listItem()
      .title('Film')
      .id('film')
      .child(
        S.editor()
          .id('film')
          .schemaType('film')
          .documentId('film')
      ),
    S.listItem()
      .title('Event')
      .id('event')
      .child(
        S.editor()
          .id('event')
          .schemaType('event')
          .documentId('event')
      ),
    S.listItem()
      .title('Casting')
      .id('casting')
      .child(
        S.editor()
          .id('casting')
          .schemaType('casting')
          .documentId('casting')
      ),
    S.listItem()
      .title('Book')
      .id('book')
      .child(
        S.editor()
          .id('book')
          .schemaType('book')
          .documentId('book')
      ),
    S.listItem()
      .title('Contact')
      .id('contact')
      .child(
        S.editor()
          .id('contact')
          .schemaType('contact')
          .documentId('contact')
      ),
    S.listItem()
      .title('Footer')
      .id('footer')
      .child(
        S.editor()
          .id('footer')
          .schemaType('footer')
          .documentId('footer')
      ),
  ]

  const otherItems = S.documentTypeListItems().filter(
    (listItem) => !singletonTypes.includes((listItem.getId() || '') as typeof singletonTypes[number])
  )

  return S.list()
    .title('Content')
    .items([
      ...singletonItems,
      S.divider(),
      ...otherItems,
    ])
}
