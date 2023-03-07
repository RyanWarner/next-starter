import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { siteConfig } from 'site.config'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const basePath = '/studio'
const title = siteConfig.brandName

const getConfig = () => {
  if (!projectId || !dataset) {
    console.warn(
      'Missing required config for Sanity. Check your projectId and dataset.'
    )
    return
  }

  return defineConfig({
    basePath,
    name: 'default',
    title,
    projectId,
    dataset,
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes
    }
  })
}

export default getConfig()
