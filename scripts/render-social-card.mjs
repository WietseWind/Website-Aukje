// Optional design export; the resulting PNGs are committed, so deployment needs no image tooling.
import { readFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
const photo = await readFile(new URL('../public/images/aukje-met-flatcoated-retrievers.jpg', import.meta.url))
const template = await readFile(new URL('./social-card.svg', import.meta.url), 'utf8')
const svg = template.replace('__PHOTO_DATA_URI__', `data:image/jpeg;base64,${photo.toString('base64')}`)
execFileSync('rsvg-convert', ['-o', 'public/images/de-zesvoeter-social.png'], { input: svg })
execFileSync('rsvg-convert', ['-w', '512', '-h', '512', '-o', 'public/images/de-zesvoeter-logo.png', 'public/favicon.svg'])
