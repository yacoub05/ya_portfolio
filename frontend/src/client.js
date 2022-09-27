import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.projectId,
    dataset:'production',
    apiVersion:'2022-09-10',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
 