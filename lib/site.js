export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://shahnawaz-nazar.com').replace(/\/$/, '')
export const SITE_NAME = 'Shahnawaz Khan'
export const OG_IMAGE = '/assets/images/profile/shahnawaz-khan-web-developer.webp'
export const OG_IMAGE_SIZE = { width: 1360, height: 714 }
export const SOCIALS = {
  github: 'https://github.com/shahnawaz-web',
  linkedin: 'https://pk.linkedin.com/in/shahnawaz-khan-webdeveloper',
  x: 'https://x.com/shahnawaz_code',
  facebook: 'https://www.facebook.com/share/1CLwVdrvQq/',
  instagram: 'https://www.instagram.com/shahnawazkhan.dev',
}
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xaqawndd'

export function pageMetadata({ title, description, path, type = 'website', extra = {} }) {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type, url, title, description, siteName: 'Shahnawaz Khan Portfolio', locale: 'en_US',
      images: [{ url: OG_IMAGE, ...OG_IMAGE_SIZE, alt: 'Shahnawaz Khan - Full Stack Web Developer Portfolio' }],
      ...extra,
    },
    twitter: { card: 'summary_large_image', title, description, site: '@shahnawaz_code', creator: '@shahnawaz_code', images: [OG_IMAGE] },
  }
}
