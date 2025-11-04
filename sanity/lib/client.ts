// import { createClient } from 'next-sanity'
//
// import { apiVersion, dataset, projectId } from '../env'
//
// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { createClient, FilteredResponseQueryOptions, QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import fs from 'fs/promises'
import path from 'path'
import crypto from 'crypto'

const base = createClient({ projectId, dataset, apiVersion, useCdn: true })
const cacheDir = path.join(process.cwd(), '.tmp', 'sanity-cache')
const disabled = process.env.SANITY_CACHE === 'off' // optional flag

function key(query: string, params?: Record<string, unknown>) {
  return crypto
    .createHash('sha256')
    .update(query + '\n' + JSON.stringify(params || {}))
    .digest('hex')
}

async function readCache<T>(file: string): Promise<T | null> {
  try {
    const raw = await fs.readFile(file, 'utf8')
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

async function writeCache<T>(file: string, data: T) {
  console.log('Writing cache file:', file)

  try {
    await fs.mkdir(cacheDir, { recursive: true })
    await fs.writeFile(file, JSON.stringify(data))
  } catch {}
}

export const client = {
  ...base,
  fetch: async function fetch<T = any>(
    query: string,
    params: QueryParams,
    options?: FilteredResponseQueryOptions
  ): Promise<T> {
    if (disabled) return base.fetch<T>(query, params, options)

    const filename = path.join(cacheDir, key(query, params) + '.json')
    const cached = await readCache<T>(filename)

    if (cached) return cached

    const data = await base.fetch<T>(query, params, options)

    writeCache(filename, data)

    return data
  },
} as typeof base
