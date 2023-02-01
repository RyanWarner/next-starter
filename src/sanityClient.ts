import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const sanityClient = createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
})
