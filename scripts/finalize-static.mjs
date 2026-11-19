import { copyFile, writeFile } from 'node:fs/promises'
import { pages } from '../src/data/pages.js'
import { articles } from '../src/data/knowledge.js'
import { site, canonicalUrl } from '../src/data/site.js'
import { rates, formatRate } from '../src/data/content.js'

const escapeXml = (text) => text.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character])
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${escapeXml(canonicalUrl(page.path))}</loc>${page.articleSlug ? `<lastmod>${articles.find((article) => article.slug === page.articleSlug).dateModified}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`
await writeFile('dist/sitemap.xml', sitemap)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`)

const llms = `# ${site.name}\n\n> ${site.description}\n\nDe Zesvoeter is de hondenuitlaatservice van ${site.owner} voor ${site.region}. De honden gaan naar een buitenruimte van duizenden vierkante meters in Achterveld (Midden-Nederland), met veel gras en ruimte om te rennen en spelen. De aanpak draait om vertrouwen, persoonlijke aandacht, positieve begeleiding en een passende groep. Het werkgebied en de plek van de buitenactiviteiten zijn dus verschillend.\n\n## Praktische informatie\n\n- Contact: ${site.email}; WhatsApp ${site.phone}.\n- Groepswandeling: ${formatRate(rates.group)}. Weekend en feestdagen: ${formatRate(rates.weekendHoliday)}. Tweede hond op hetzelfde adres: ${formatRate(rates.secondDog)} per groepswandeling. Inclusief btw.\n- Ochtendwandeling: 10:00–11:00. Middagwandeling: 13:00–14:00. Ophalen en thuisbrengen daaromheen; zie de tarievenpagina.\n- Alle dagen zitten momenteel vol. Vrijblijvend aanmelden voor de wachtlijst kan via het formulier op de contactpagina.\n- Groepsgrootte hangt af van de samenstelling. Vooraf is er een vrijblijvend kennismakingsgesprek bij de eigenaar thuis.\n\n## Website\n\n${pages.map((page) => `- [${page.title}](${canonicalUrl(page.path)}): ${page.description}`).join('\n')}\n\n## Andere kanalen\n\n- [Instagram](${site.instagram}): foto's van De Zesvoeter.\n\nDe zichtbare pagina's en hun bronverwijzingen geven de volledige context. De kennisartikelen zijn algemene achtergrond bij de visie van De Zesvoeter en geen individueel medisch of gedragsadvies.\n`
await writeFile('dist/llms.txt', llms)
await copyFile('dist/404/index.html', 'dist/404.html')
console.log(`[static] Sitemap met ${pages.length} pagina's, robots.txt, llms.txt en 404.html aangemaakt.`)
