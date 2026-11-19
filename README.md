# De Zesvoeter

Website voor de hondenuitlaatservice van Aukje Wind voor Zeist en regio Utrecht, met een ruime buitenplek in Achterveld (Midden-Nederland). Gebouwd met Vue 3, Vue Router, Vite en Vite SSG. De bestaande pagina's zijn aangevuld met kennisartikelen bij Visie; bedrijfsinformatie en tarieven volgen de aangeleverde gegevens. Lettertypen, iconen, illustratie en foto worden lokaal meegeleverd; er zijn geen externe UI-bibliotheken of fontdiensten nodig.

## Lokaal bekijken

Gebruik Node.js 22.12 of nieuwer (Node 24 LTS aanbevolen).

```sh
npm ci
npm run dev
```

Open de lokale URL die Vite toont (standaard http://127.0.0.1:5173). `npm run serve` werkt ook.

## Statische build

```sh
npm run build
npm run preview
```

De volledige website staat daarna in `dist/`: HTML per pagina, CSS, JavaScript, afbeeldingen en lettertypen. Ook zonder JavaScript is alle pagina-inhoud beschikbaar. Er is geen applicatieserver nodig bij deployment. De bestaande URL's blijven behouden. De vier kennisartikelen staan onder `/visie/`. Canonical-URL's gebruiken afsluitende slashes, passend bij de gegenereerde paginamappen.

Publiceer later alleen de inhoud van `dist/` op een statische webhost. Alle pagina's hebben eigen vooraf gegenereerde HTML. `dist/404.html` is de foutpagina; configureer de statische webhost om deze met HTTP-status 404 te serveren voor onbekende URL's. De meegeleverde `public/_redirects` doet dit op Netlify. Deze vernieuwing publiceert of pusht niets automatisch.

## Inhoud aanpassen

- `src/data/content.js`: teksten, voorwaarden en de centrale administratieprijzen.
- `src/data/site.js`: bedrijfsgegevens, werkgebied, buitenlocatie, canonical-domein en deelafbeelding.
- `src/data/pages.js`: titels en beschrijvingen voor alle indexeerbare pagina's.
- `src/data/knowledge.js`: vier kennisartikelen met bronverwijzingen en inhoudelijke datums.
- `src/views/`: de afzonderlijke pagina's en presentatie van de tarieven.
- `src/views/partials/Vol.vue`: beschikbaarheid en wachtlijstformulier.
- `src/components/ContactLinks.vue`: WhatsApp- en e-mailcontact.
- `src/components/RetrieverSketch.vue`: illustratie met de flatcoated retriever.
- `src/assets/flatcoated-retriever-line-art.png`: oorspronkelijke referentiegestuurde lijnillustratie; de site gebruikt de visueel gelijke, verliesvrij gecomprimeerde WebP-versie.
- `public/images/`: wandelingsfoto, bedrijfslogo en deelafbeelding.
- `src/components/SiteHeader.vue`: native dropdown onder Visie, ook met toetsenbord, op mobiel en zonder JavaScript.
- `src/style.css`: kleuren, typografie en responsive vormgeving.

De tarieven staan centraal in `src/data/content.js` en volgen de administratieconfiguratie: €18,50, €20 en 27,027% korting voor de tweede hond (€13,50). De leeftijden zijn in november 2026 met drie jaar verhoogd op basis van de laatste inhoudelijke leeftijdsupdate van 22 maart 2023. De wachtlijststatus is overgenomen uit de oude site.

De lijnillustratie is gegenereerd met de ingebouwde Imagegen-tool, op basis van de aangeleverde flatcoatfoto. Brief: een anatomisch herkenbaar staand zijprofiel van een flatcoated retriever, met lange vlakke kop, kleine afhangende oren, rechte rug en bevederde vacht en staart; dunne bosgroene inktlijnen op een transparante achtergrond, zonder tekst of decor.

## Vindbaarheid en delen

De statische HTML bevat per pagina een unieke titel en beschrijving, canonical-URL, Open Graph en Twitter `summary_large_image`-metadata. De deelafbeelding is 1200 × 630 pixels en staat op een vaste openbare URL. `src/seo.js` voegt JSON-LD toe voor de organisatie, Aukje, de website, de hondenuitlaatservice, tarieven, pagina's en artikelen. Zeist en regio Utrecht zijn het werkgebied; Achterveld is de buitenlocatie. Er wordt geen onbekend vestigingsadres ingevuld.

Na de SSG-build schrijft `scripts/finalize-static.mjs` een `sitemap.xml`, `robots.txt`, `llms.txt` en `404.html`. De sitemap komt uit dezelfde paginacatalogus als de router. Alleen inhoudelijk gedateerde artikelen krijgen een `lastmod`; een nieuwe build doet zich niet automatisch voor als bijgewerkte inhoud. De 404-pagina heeft `noindex` en staat buiten de sitemap.

`llms.txt` is een aanvullende leeswijzer voor agents, geen vereiste voor Google of garantie op een positie in AI-antwoorden. De gewone HTML, interne links en consistente bedrijfsinformatie blijven de basis. Zoekmachines en sociale platforms bepalen zelf of en hoe een pagina wordt getoond. Crawler-toegang moet ook op de daadwerkelijke webhost of CDN toegestaan blijven. Sitemap aanmelden in Search Console en bedrijfsgegevens in een Google Bedrijfsprofiel bijhouden gebeurt buiten de code.

De nieuwe kennisartikelen zijn redactionele achtergrond bij Aukjes bestaande verhaal. Ze verwijzen naar LICG, Dogs Trust, Battersea, Blue Cross en RSPCA en doen geen beloftes dat groepswandelingen voor elke hond geschikt zijn. Bron- en publicatiedatums worden in `src/data/knowledge.js` onderhouden.

```sh
npm run build
npm run check
```

De controle leest alle gebouwde pagina's en verifieert metadata, canonical-URL's, structured data, prijzen, interne links, artikelinhoud en bronnen, de sitemap, robots, de agentleeswijzer, deelafbeelding en foutpagina.

De sociale afbeelding en het PNG-logo zijn vooraf gegenereerd en worden meegecommit. Optioneel opnieuw exporteren met `node scripts/render-social-card.mjs` (vereist lokaal `rsvg-convert`). Dit is geen dependency van de deployment-build.

De huidige deployment loopt via de bestaande Coolify-webhook op `master`. `netlify.toml` blijft een optionele configuratie voor Node 24, `npm run build` en de statische map `dist` als er later met Netlify wordt gedeployd.
