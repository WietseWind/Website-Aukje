export const site = {
  name: 'De Zesvoeter',
  origin: 'https://zesvoeter.nl',
  owner: 'Aukje Wind',
  region: 'Zeist en regio Utrecht',
  description: 'Hondenuitlaatservice De Zesvoeter van Aukje Wind voor Zeist en regio Utrecht. Persoonlijke aandacht, positief begeleiden en heerlijk buiten wandelen en spelen in Achterveld.',
  outdoorSpace: 'Een heerlijke buitenruimte van duizenden vierkante meters in Achterveld, Midden-Nederland, met veel gras en ruimte om te rennen en spelen.',
  phone: '+31648077493',
  email: 'aukje@wind.cd',
  instagram: 'https://www.instagram.com/de_zesvoeter/',
  photo: '/images/aukje-met-flatcoated-retrievers.jpg',
  socialImage: '/images/de-zesvoeter-social.png',
  socialImageAlt: 'De Zesvoeter: hondenuitlaatservice voor Zeist en regio Utrecht, met Aukje en haar flatcoated retrievers buiten.',
  waitingList: 'https://docs.google.com/forms/d/e/1FAIpQLSct_IpcN59OuOSbgsmzjJcDF3YnNI438fG_NkxTZX1pF0c0sw/viewform',
}

export function canonicalUrl(path = '/') {
  const normalized = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`
  return new URL(normalized, site.origin).href
}
