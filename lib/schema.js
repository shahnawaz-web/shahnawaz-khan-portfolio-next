import schemas from '@/data/home-schemas.json'
import { SITE_URL } from '@/lib/site'

export function homeSchemas() {
  return JSON.parse(JSON.stringify(schemas).replaceAll('__SITE__', SITE_URL))
}

export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE_URL + it.path })),
  }
}
