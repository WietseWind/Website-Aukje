import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { pages } from '../src/data/pages.js'
import { articles } from '../src/data/knowledge.js'
import { site, canonicalUrl } from '../src/data/site.js'
import { rates } from '../src/data/content.js'

const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp;', '\u00a0').replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(hex ? parseInt(hex, 16) : Number(decimal)))
function headTags(html) {
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1]
  assert.ok(head, 'Missing document head')
  return [...head.matchAll(/<(meta|link)\b([^>]+)>/g)].map((match) => ({ tag: match[1], ...Object.fromEntries([...match[2].matchAll(/([\w:-]+)="([^"]*)"/g)].map((attribute) => [attribute[1], decode(attribute[2])])) }))
}
function singleMeta(tags, name) {
  const matches = tags.filter((tag) => tag.tag === 'meta' && (tag.name === name || tag.property === name))
  assert.equal(matches.length, 1, `Expected one ${name} tag`)
  assert.ok(matches[0].content, `${name} must not be empty`)
  return matches[0].content
}
const titles = new Set()
for (const page of pages) {
  const html = await readFile(`dist/${page.path === '/' ? '' : `${page.path.slice(1)}/`}index.html`, 'utf8')
  assert.ok(html.includes('<html lang="nl">'), `${page.path}: Dutch document language`)
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${page.path}: exactly one rendered h1`)
  const title = decode(html.match(/<title>([^<]+)<\/title>/)[1])
  assert.ok(!titles.has(title), `${page.path}: unique title`)
  titles.add(title)
  const tags = headTags(html)
  assert.equal(singleMeta(tags, 'description'), page.description)
  assert.equal(singleMeta(tags, 'robots'), 'index, follow, max-image-preview:large')
  const canonical = tags.filter((tag) => tag.rel === 'canonical')
  assert.equal(canonical.length, 1)
  assert.equal(canonical[0].href, canonicalUrl(page.path))
  assert.equal(singleMeta(tags, 'og:url'), canonical[0].href)
  assert.equal(singleMeta(tags, 'og:type'), page.articleSlug ? 'article' : 'website')
  for (const name of ['og:title', 'og:description', 'og:site_name', 'og:locale', 'og:image', 'og:image:alt', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) singleMeta(tags, name)
  assert.equal(singleMeta(tags, 'twitter:card'), 'summary_large_image')
  assert.equal(singleMeta(tags, 'og:image'), `${site.origin}${site.socialImage}`)
  assert.equal(singleMeta(tags, 'og:image:width'), '1200')
  assert.equal(singleMeta(tags, 'og:image:height'), '630')
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  assert.equal(scripts.length, 1, 'One static JSON-LD graph')
  const json = JSON.parse(scripts[0][1])
  assert.equal(json['@context'], 'https://schema.org')
  const service = json['@graph'].find((node) => node['@type'] === 'Service')
  assert.ok(service.areaServed.some((area) => area.name === 'Zeist'))
  assert.ok(service.areaServed.some((area) => area.name === 'Regio Utrecht'))
  assert.ok(service.availableChannel.serviceLocation.description.includes('Achterveld'))
  assert.deepEqual(service.hasOfferCatalog.itemListElement.map((offer) => Number(offer.price)), [18.5, 20, 13.5])
  assert.equal((html.match(/class="[^"]*submenu-link/g) || []).length, 5, 'Crawlable native submenu')
  for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]*)"/g)) {
    const path = decode(match[1])
    const relative = path.replace(/^\//, '')
    const file = relative === '' ? 'dist/index.html' : /\.[a-z0-9]+$/i.test(relative) ? `dist/${relative}` : `dist/${relative.replace(/\/$/, '')}/index.html`
    assert.ok((await stat(file)).isFile(), `${page.path}: internal resource ${path} exists`)
  }
  if (page.articleSlug) {
    const article = articles.find((item) => item.slug === page.articleSlug)
    assert.ok(html.includes(article.intro), 'Article text exists without JavaScript')
    assert.ok(json['@graph'].some((node) => node['@type'] === 'Article' && node.headline === article.seoTitle))
    for (const source of article.sources) assert.ok(html.includes(source.url), 'Visible article sources')
    for (const section of article.sections) assert.ok(html.includes(`id="${section.id}"`), 'Article anchor exists')
  }
  assert.ok(!/eigen omheinde speelweide|Lemon \(|Orange \(/.test(html), 'No outdated site content')
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]))
assert.deepEqual(locations.sort(), pages.map((page) => canonicalUrl(page.path)).sort())
assert.ok(!sitemap.includes('/404/'))
const robots = await readFile('dist/robots.txt', 'utf8')
assert.ok(robots.includes('User-agent: *\nAllow: /'))
assert.ok(robots.includes(`Sitemap: ${site.origin}/sitemap.xml`))
const llms = await readFile('dist/llms.txt', 'utf8')
for (const term of ['Zeist', 'Utrecht', 'Achterveld', '18,50', '13,50']) assert.ok(llms.includes(term))
const notFound = await readFile('dist/404.html', 'utf8')
assert.equal(singleMeta(headTags(notFound), 'robots'), 'noindex, follow')
assert.ok(!headTags(notFound).some((tag) => tag.rel === 'canonical'))
const socialImage = await readFile(`dist${site.socialImage}`)
assert.equal(socialImage.readUInt32BE(16), 1200)
assert.equal(socialImage.readUInt32BE(20), 630)
assert.ok(socialImage.length < 5_000_000)
assert.equal(rates.secondDog, 13.5)
console.log(`Verified ${pages.length} static pages: unique SEO metadata, canonical URLs, Open Graph, Twitter Cards, JSON-LD, internal links, article sources, sitemap, robots, llms.txt and 404.`)
