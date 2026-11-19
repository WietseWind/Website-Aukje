import { articles } from './knowledge.js'
import { rates, formatRate } from './content.js'

export const pages = [
  { path: '/', name: 'home', title: 'Hondenuitlaatservice Zeist & regio Utrecht', description: 'De Zesvoeter van Aukje Wind: hondenuitlaatservice voor Zeist en regio Utrecht. Aandacht, positief begeleiden en buiten spelen op een ruime plek in Achterveld.' },
  { path: '/visie', name: 'visie', title: 'Visie: liefdevolle aandacht voor uw hond', description: 'Vertrouwen, positieve begeleiding en aandacht voor iedere hond. Ontdek Aukjes visie op samen wandelen, spelen en lekker buiten zijn bij De Zesvoeter.' },
  ...articles.map((article) => ({ path: article.path, name: article.slug, title: article.seoTitle, description: article.description, articleSlug: article.slug })),
  { path: '/werkwijze', name: 'werkwijze', title: 'Werkwijze: ophalen, buiten spelen & thuisbrengen', description: 'Kennismaken, ophalen en samen naar een buitenruimte van duizenden vierkante meters in Achterveld. Zo werkt De Zesvoeter voor Zeist en regio Utrecht.' },
  { path: '/over-mij', name: 'over-mij', title: 'Aukje Wind: de hondenliefhebber achter De Zesvoeter', description: 'Maak kennis met Aukje Wind, haar flatcoated retrievers Pomelo, Lychee en Goji en haar liefde voor honden, positieve begeleiding en het buitenleven.' },
  { path: '/wandelvoorwaarden', name: 'wandelvoorwaarden', title: 'Wandelvoorwaarden', description: 'De wandelvoorwaarden van hondenuitlaatservice De Zesvoeter. Duidelijke afspraken voor een fijne en verantwoorde tijd buiten met uw hond.' },
  { path: '/tarieven', name: 'tarieven', title: 'Tarieven hondenuitlaatservice Zeist & regio Utrecht', description: `Groepswandeling ${formatRate(rates.group)}, weekend en feestdagen ${formatRate(rates.weekendHoliday)}, tweede hond op hetzelfde adres ${formatRate(rates.secondDog)}. Bekijk tarieven en wandeltijden.` },
  { path: '/contact', name: 'contact', title: 'Contact met Aukje Wind · hondenuitlaatservice Zeist', description: 'Neem contact op met Aukje Wind van De Zesvoeter voor Zeist en regio Utrecht. Via WhatsApp, e-mail of het formulier voor de wachtlijst.' },
]
