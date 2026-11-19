import { site, canonicalUrl } from './data/site.js'
import { articles } from './data/knowledge.js'
import { rates } from './data/content.js'

const organizationId = `${site.origin}/#organization`
const websiteId = `${site.origin}/#website`
const serviceId = `${site.origin}/#service`
const areaServed = [
  { '@type': 'City', name: 'Zeist' },
  { '@type': 'AdministrativeArea', name: 'Regio Utrecht' },
]

export function structuredData(route) {
  const url = canonicalUrl(route.path)
  const article = articles.find((item) => item.slug === route.meta.articleSlug)
  const breadcrumbs = [{ name: 'Home', item: canonicalUrl('/') }]
  if (article) breadcrumbs.push({ name: 'Visie', item: canonicalUrl('/visie') })
  if (route.path !== '/') breadcrumbs.push({ name: article?.title || route.meta.breadcrumb || route.meta.title, item: url })

  const graph = [
    {
      '@type': 'Organization', '@id': organizationId, name: site.name, url: site.origin,
      description: site.description, telephone: site.phone, email: site.email,
      logo: { '@type': 'ImageObject', url: `${site.origin}/images/de-zesvoeter-logo.png`, width: 512, height: 512 },
      image: `${site.origin}${site.socialImage}`, sameAs: [site.instagram], areaServed,
      founder: { '@id': `${site.origin}/#aukje-wind` },
      identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: '76850994' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'klantenservice', telephone: site.phone, email: site.email, availableLanguage: 'nl', url: canonicalUrl('/contact') },
    },
    { '@type': 'Person', '@id': `${site.origin}/#aukje-wind`, name: site.owner, url: canonicalUrl('/over-mij'), worksFor: { '@id': organizationId } },
    { '@type': 'WebSite', '@id': websiteId, name: site.name, url: canonicalUrl('/'), inLanguage: 'nl-NL', publisher: { '@id': organizationId } },
    {
      '@type': 'Service', '@id': serviceId, name: 'Hondenuitlaatservice De Zesvoeter',
      serviceType: 'Hondenuitlaatservice en groepswandelingen', description: site.description,
      provider: { '@id': organizationId }, areaServed, url: canonicalUrl('/werkwijze'),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: canonicalUrl('/contact'), serviceLocation: { '@type': 'Place', name: 'Buitenruimte in Achterveld, Midden-Nederland', description: site.outdoorSpace } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Hondenuitlaatservice: tarieven inclusief btw',
        itemListElement: [
          ['Groepswandeling', rates.group],
          ['Wandeling in het weekend of op feestdagen', rates.weekendHoliday],
          ['Tweede hond op hetzelfde adres: groepswandeling', rates.secondDog],
        ].map(([name, price]) => ({ '@type': 'Offer', name, price: price.toFixed(2), priceCurrency: 'EUR', url: canonicalUrl('/tarieven'), itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': article ? 'Article' : 'WebPage', '@id': `${url}#${article ? 'article' : 'webpage'}`,
      url, name: route.meta.title, description: route.meta.description, inLanguage: 'nl-NL',
      isPartOf: { '@id': websiteId }, publisher: { '@id': organizationId },
      about: { '@id': serviceId },
      ...(article ? {
        headline: article.seoTitle, articleSection: 'Visie en kennis over honden',
        author: { '@id': organizationId },
        datePublished: article.datePublished, dateModified: article.dateModified,
        image: [`${site.origin}${site.socialImage}`],
        mainEntityOfPage: url, citation: article.sources.map((source) => source.url),
      } : { mainEntity: { '@id': serviceId } }),
    },
    {
      '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })),
    },
  ]
  return { '@context': 'https://schema.org', '@graph': graph }
}

export function pageHead(route) {
  const noindex = route.name === 'not-found' || route.meta.noindex
  const title = `${route.meta.title || 'Pagina niet gevonden'} | ${site.name}`
  const description = route.meta.description || site.description
  const article = articles.find((item) => item.slug === route.meta.articleSlug)
  return {
    htmlAttrs: { lang: 'nl' }, title,
    link: noindex ? [] : [{ rel: 'canonical', href: canonicalUrl(route.path) }],
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: article ? 'article' : 'website' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:locale', content: 'nl_NL' },
      { property: 'og:url', content: canonicalUrl(route.path) },
      { property: 'og:image', content: `${site.origin}${site.socialImage}` },
      { property: 'og:image:secure_url', content: `${site.origin}${site.socialImage}` },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: site.socialImageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${site.origin}${site.socialImage}` },
      { name: 'twitter:image:alt', content: site.socialImageAlt },
      ...(article ? [
        { property: 'article:published_time', content: article.datePublished },
        { property: 'article:modified_time', content: article.dateModified },
        { property: 'article:section', content: 'Visie' },
      ] : []),
    ],
    script: noindex ? [] : [{ key: 'structured-data', type: 'application/ld+json', innerHTML: JSON.stringify(structuredData(route)).replace(/</g, '\\u003c') }],
  }
}
