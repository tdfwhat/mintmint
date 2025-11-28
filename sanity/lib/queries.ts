export const homeQuery = `
*[_type == "home"][0] {
  mainImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  whatWeDoSv[],
  whatWeDoEn[],
  filmImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  eventImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  castingImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  bookImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  whoAreWeImage { asset -> { _id, url, metadata { dimensions { width, height } } } }
}
`

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)] {
  "slug": slug.current
}
`

export const projectQuery = `
*[_type == "project" && slug.current == $slug][0] {
  title,
  slug,
  projectType,
  mainImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  videoUrl,
  descriptionSv,
  descriptionEn,
  images[] { asset -> { _id, url, metadata { dimensions { width, height } } } }
}
`

export const bookQuery = `
*[_type == "book-and-picture"][0] {
  projects[]-> {
    title,
    slug,
    projectType,
    mainImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  },
  contentSv[],
  contentEn[]
}
`

export const filmQuery = `
*[_type == "film"][0] {
  projects[]-> {
    title,
    slug,
    projectType,
    mainImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  }
}
`

export const eventQuery = `
*[_type == "event"][0] {
  projects[]-> {
    title,
    slug,
    projectType,
    mainImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  }
}
`

export const castingQuery = `
*[_type == "casting"][0] {
  projects[]-> {
    title,
    slug,
    projectType,
    mainImage { asset -> { _id, url, metadata { dimensions { width, height } } } },
  },
  contentSv[],
  contentEn[]
}
`

export const contactQuery = `
*[_type == "contact"][0] {
  people[]-> {
    name,
    avatar { asset -> { _id, url, metadata { dimensions { width, height } } } },
    contentSv[],
    contentEn[]
  }
}
`
export const footerQuery = `
*[_type == "footer"][0] {
  visitingAddress,
  mailingAddress,
  emailAddress,
  instagram,
  facebook
}
`
