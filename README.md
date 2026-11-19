# De Zesvoeter

Website voor de hondenuitlaatservice van Aukje Wind in Zeist en omstreken. Gebouwd met Vue 3, Vue Router, Vite en Vite SSG. De bestaande pagina's en inhoud zijn behouden. Lettertypen, iconen, illustratie en foto worden lokaal meegeleverd; er zijn geen externe UI-bibliotheken of fontdiensten nodig.

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

De volledige website staat daarna in `dist/`: HTML per pagina, CSS, JavaScript, afbeeldingen en lettertypen. Ook zonder JavaScript is alle pagina-inhoud beschikbaar. Er is geen applicatieserver nodig bij deployment. De bestaande URL's blijven behouden: `/`, `/visie`, `/werkwijze`, `/over-mij`, `/wandelvoorwaarden`, `/tarieven` en `/contact`.

Publiceer later alleen de inhoud van `dist/` op een statische webhost. De meegeleverde `public/_redirects` biedt op Netlify een fallback voor clientnavigatie; de bestaande pagina's hebben ieder hun eigen vooraf gegenereerde HTML-bestand. Deze vernieuwing publiceert of pusht niets automatisch.

## Inhoud aanpassen

- `src/data/content.js`: bestaande teksten, voorwaarden en prijsinformatie.
- `src/views/`: de afzonderlijke pagina's en presentatie van de tarieven.
- `src/views/partials/Vol.vue`: beschikbaarheid en wachtlijstformulier.
- `src/components/ContactLinks.vue`: WhatsApp- en e-mailcontact.
- `src/components/RetrieverSketch.vue`: illustratie met de flatcoated retriever.
- `src/assets/flatcoated-retriever-line-art.png`: definitieve referentiegestuurde lijnillustratie.
- `src/style.css`: kleuren, typografie en responsive vormgeving.

Persoonlijke leeftijden, hondenaantallen, tarieven en de wachtlijststatus zijn overgenomen uit de oude site. Controleer deze inhoud voordat de website later wordt gepubliceerd.

De lijnillustratie is gegenereerd met de ingebouwde Imagegen-tool, op basis van de aangeleverde flatcoatfoto. Brief: een anatomisch herkenbaar staand zijprofiel van een flatcoated retriever, met lange vlakke kop, kleine afhangende oren, rechte rug en bevederde vacht en staart; dunne bosgroene inktlijnen op een transparante achtergrond, zonder tekst of decor.

`netlify.toml` configureert de bestaande Netlify-deployment: Node 24, `npm run build` en de statische map `dist`.
