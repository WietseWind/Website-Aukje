// Tarieven uit de administratieconfiguratie; korting geldt voor de tweede hond.
export const rates = {
  group: 18.5,
  weekendHoliday: 20,
  secondDogDiscountPercent: 27.027,
}
rates.secondDog = Number((rates.group * (1 - rates.secondDogDiscountPercent / 100)).toFixed(2))

export function formatRate(value) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)
}

// Leeftijden bijgewerkt in november 2026: +3 jaar sinds de leeftijdsregel van 22 maart 2023.
// Overige bestaande website-inhoud behouden bij de vernieuwing.
export const content = {
  "about": [
    "Welkom bij Hondenuitlaatservice Zesvoeter",
    "Mijn naam is Aukje Wind en mijn liefde voor honden heeft er voor gezorgd dat ik Hondenuitlaatservice Zesvoeter ben begonnen.",
    "Toen ik 12 jaar oud was kreeg ik mijn eerste hond, een flatcoated retriever teefje met de naam Pistache. Het was heerlijk om samen met een hond op te groeien, te wandelen en te trainen.",
    "Ondertussen ben ik 36 en heb ik twee geweldige flatcoated retriever meiden: Pomelo (8) en Lychee (4).",
    "In mijn vrije tijd wandel ik graag met mijn meiden en volg ik jacht training bij Ingrid Jongerius van jachthondenschool Kynoquest.",
    "Bij hondenschool Kynoquest draait alles om de positieve leerwijze en op een leuke manier samenwerken met je hond, dit is helemaal wat bij mij past en tot mijn grote geluk vroeg Ingrid mij om haar te gaan helpen met de puppycursus en de basis clicker cursus.",
    "In de tijd dat ik meedraai binnen de hondenschool heb ik ontzettend veel bijgeleerd over honden en gedrag, en hoe fijn is het dat ik al die kennis binnen de Hondenuitlaatservice toe kan passen.",
    "Al met al kun je dus wel zeggen dat mijn hele leve draait om honden, en ik zou het op geen enkele wijze anders willen."
  ],
  "method": [
    "Dat u op mijn site terecht bent gekomen zal hoogstwaarschijnlijk zijn omdat u een uitlaatservice voor uw hond zoekt.",
    "Als u interesse hebt in mijn diensten kunt u geheel vrijblijvend contact met mij opnemen, we plannen dan een kennismakingsgesprek bij u thuis zodat we elkaar wat vragen kunnen stellen en uw hond(en) en ik elkaar ook kunnen ontmoeten.",
    "Als het van beide kanten goed voelt spreken we samen af welke dagen en tijden uw hond(en) door mij opgehaald zal/zullen worden en krijgt u van mij een digitaal formulier met daarin gelijk de voorwaarden en het sleutelcontract toegevoegd. Dit formulier vult u in en ondertekent u digitaal.",
    "Als dat allemaal geregeld is kan uw hond lekker met mij mee wandelen.",
    "Ik haal uw hond op in een daarvoor speciaal ingericht busje voorzien van kennels en dakventilatie. Ik rij samen met de honden naar onze eigen omheinde speelweide.",
    "Aangekomen in het bos of op de speelweide draait alles om plezier en vertrouwen. Ongeacht de groepsgrootte zorg ik er altijd voor dat iedere hond de aandacht krijgt die hij/zij nodig heeft en iedere hond het naar zijn/haar zin heeft binnen de groep. Ik werk op een positieve wijze met honden en dat betekent dat er zeker wel grenzen en regels zijn, maar dat ik die grenzen en regels duidelijk maak door het belonen van gewenst gedrag. Ongewenst gedrag wordt niet bestraft maar zoveel mogelijk voorkomen. Mocht er toch ongewenst gedrag ontstaan dan gaan we er aan werken dit om te buigen naar gewenst gedrag wat ik vervolgens weer kan belonen.",
    "Na een uur plezier krijgen de honden bij de auto wat water te drinken om vervolgens weer naar huis gebracht te worden. Voor wat jongere honden wordt rekening gehouden met het nog groeiende lijf en zullen we wat korter wandelen en de rest van het uur opvullen met wat leuke oefeningetjes, zo zal uw hond ook geestelijk moe en tevreden zijn."
  ],
  "conditions": [
    "Hondenuitlaatservice Zesvoeter is in het bezit van uw huissleutel om uw woning te kunnen betreden. Hiervoor wordt een sleutelcontract getekend.",
    "Uw hond dient in goede gezondheid te verkeren tijdens de periode dat u gebruik maakt van de hondenuitlaatservice. Wij verwachten dat uw hond op verantwoordelijke wijze gevaccineerd/getiterd en ontwormd is.",
    "De verantwoordelijkheid van het controleren op vlooien en teken en het preventief behandelen van vlooien en teken en de kosten hiervan liggen ten alle tijde bij de eigenaar van de hond.",
    "Indien geconstateerd wordt dat de hond een besmettelijke ziekte heeft kan uw hond tijdens deze periode niet met de groepswandeling mee. Samen kunnen we kijken naar een oplossing zoals bijvoorbeeld een individuele wandeling.",
    "Hondenuitlaatservice Zesvoeter kan niet aansprakelijk worden gesteld voor ziekten, verwondingen die uw hond op kan lopen of andere honden kan aanbrengen, infecties of andere aandoeningen.",
    "Als uw teefje loops is geworden laat u dit gelijk weten, wij kunnen dan samen zoeken naar een oplossing en voorkomen dat zij in een groep komt samen met een intacte reu.",
    "Uw hond krijgt tijdens de wandeling een penning met daarop mijn telefoonnummer aan de halsband voor het geval uw hond wegloopt. Indien ik het nodig vindt voeg ik ook een GPS tracker aan de halsband toe om de hond via een app terug te kunnen vinden.",
    "De eigenaar van de hond dient minimaal WA-verzekerd te zijn. Vraag na of uw hond is meeverzekerd.",
    "Hondenuitlaatservice Zesvoeter is niet aansprakelijk voor verlies van de hond en/of toebehoren.",
    "U blijft ten allen tijde zelf aansprakelijk voor uw hond. Maakt uw hond schade aan een andere hond of een persoon dan valt dit ook onder uw aansprakelijkheid.",
    "Uw hond zal loslopen tijdens de wandeling, tenzij anders is afgesproken.",
    "Honden worden vervoerd in een daarvoor geschikte auto.",
    "In de auto is altijd een EHBO tas aanwezig voor het geval een van de honden zich bezeert op wat voor een manier dan ook. Hondenuitlaatservice Zesvoeter is in het bezit van een EHBO diploma voor honden.",
    "In de auto is altijd vers drinkwater aanwezig zodat honden wat kunnen drinken voordat zij weer in de auto gaan.",
    "Mocht er iets gebeuren tijdens het vervoeren of het uitlaten van uw hond dan heeft Hondenuitlaatservice zesvoeter het recht om naar de dichtstbijzijnde dierenarts te gaan om uw hond te laten behandelen. U wordt hiervan direct op de hoogte gesteld. De kosten zijn ten alle tijde voor de eigenaar van de hond.",
    "Honden kunnen vies thuis komen, Hondenuitlaatservice Zesvoeter kan niet aansprakelijk worden gesteld voor schade in uw woning ten gevolge van een vieze vacht. Het is aan te raden een plek te bedenken waar de hond mag verblijven wanneer deze vies thuis komt.",
    "Uw hond wordt bij u opgehaald en weer thuisgebracht door Hondenuitlaatservice Zesvoeter.",
    "Hondenuitlaatservice Zesvoeter kan ten allen tijde een hond weigeren zonder reden.",
    "Het annuleren van een wandeling dient minimaal 24 uur van te voren gedaan te worden om uw wandeling tegoed te kunnen houden. Hondenuitlaatservice Zesvoeter houdt dit voor u bij en u zult het terug kunnen zien op uw wandel overzicht.",
    "Het kan voorkomen dat Hondenuitlaatservice Zesvoeter door persoonlijke omstandigheden besluit dat de groepswandeling niet door kan gaan, enkel in dit geval en in geval van overlijden van uw hond wordt uw al betaalde wandeling gecompenseerd. Wij zoeken in zo’n geval wel altijd eerst samen naar een oplossing.",
    "Hondenuitlaatservice Zesvoeter staat achter de positieve leerwijze bij honden. Om uw hond te kunnen vertellen wanneer deze goed gedrag laat zien zal uw hond beloond worden met voertjes.",
    "Iedere eerste week van de maand worden de facturen opgemaakt, heeft u wijzigingen geef deze dan voor het einde van de maand door zodat deze meegenomen kunnen worden op de factuur."
  ],
  "vision": [
    "Als eigenaresse van twee honden snap ik maar al te goed dat u uw trouwe viervoeter niet zomaar aan de eerste de beste meegeeft.",
    "Wat ik u en uw hond(en) kan bieden is wat ik zelf van een ander verwacht als het om het uitlaten van mijn eigen honden zou gaan.",
    "Ik vind het ontzettend belangrijk dat iedere hond zich op zijn/haar gemak voelt binnen de groep en mij vertrouwd. Het vertrouwen van u in mij is belangrijk, maar dat van uw hond(en) misschien nog wel belangrijker."
  ],
  "values": [
    "Vertrouwen",
    "Verantwoordelijkheidsgevoel",
    "Liefdevolle omgang met uw hond",
    "Positieve leermethoden",
    "Geduld",
    "Een fijne boswandeling in een rustige omgeving en stabiele groep",
    "Veel foto’s van uw hond(en)"
  ],
  "pricing": [
    `<b>Groepswandeling</b>: ${formatRate(rates.group)} per wandeling.<br /> <b>Wandeling in het weekend of op feestdagen </b>: ${formatRate(rates.weekendHoliday)}`,
    `<b>Een 2e hond op hetzelfde adres ontvangt korting</b><br /> Tweede hond op hetzelfde adres, groepswandeling: ${formatRate(rates.secondDog)} per wandeling.`,
    "Zesvoeter wandelt 2 keer op een dag, de groepsgrootte is afhankelijk van de samenstelling van de groep.",
    "<b>Ochtend wandeling van 10:00 uur tot 11:00 uur</b><br /> Honden worden opgehaald tussen 09:00 uur en 10:00 uur en thuisgebracht tussen 11:00 uur en 12:00 uur.",
    "<b>Middag wandeling van 13:00 uur tot 14:00 uur</b><br /> Honden worden opgehaald tussen 12:00 uur en 13:00 uur en thuisgebracht tussen 14:00 uur en 15:00 uur.",
    "Mocht u buiten deze wandeltijden uitlaatservice nodig hebben, neem dan gewoon contact op. In overleg is er veel mogelijk.",
    "De tarieven die hierbij gehanteerd worden zijn inclusief BTW.",
    "Bij hondenuitlaatservice Zesvoeter spreekt u van te voren af hoeveel- en welke vaste dagen in de week uw hond met ons mee wandeld. (Dagen ruilen en/of extra mee kan in overleg)",
    "Op iedere eerste dag van de maand ontvangt u een factuur voor deze maand.",
    "Wilt u dat uw hond een keer extra mee wandelt? dan komt deze wandeling er op de factuur van de daaropvolgende maand bij.",
    "Vaste wandelingen die minimaal 24 uur van te voren afgemeld worden, worden uiteraard verrekend op de volgende maandfactuur.",
    "Veranderingen voor de volgende maand dienen voor het einde van de huidige maand doorgegeven te worden, alleen dan kunnen de veranderingen meegenomen worden op de volgende factuur.",
    "Gaat u dus bijvoorbeeld op vakantie en de hond hoeft dan niet mee te wandelen? Geef dit dat tijdig door.",
    "Losse wandelingen zijn ook zeker mogelijk alleen dient u er rekening mee te houden dat honden met vaste dagen voor gaan, u ontvangt dan een factuur op de eerste dag van de daaropvolgende maand."
  ]
}
