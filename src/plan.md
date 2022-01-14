## APIs to use:

Planet db: https://api.le-systeme-solaire.net/en/
Image db: https://pixabay.com/api/docs/

## MVP - Basic app requirements:

Homepage will display the planet which corresponds with that particular day of the week:

- Monday - Moon, Tues - Mars, Weds - Mercury, Thurs - Jupiter, Fri - Venus, Sat - Saturn, Sun - Sunday

User can select from a set list of planets/stars something to see more information on.

- App returns info on whatever they have selected.
  Component parts:
-

## Extra option:

'I would like to see information on' 'API search for user input'

- This should return: a string of information with details of their search term, or 'planet/star not found'.

## Components:

- Header

  - list with different buttons that fetch information from API
  - Button component (rendered by ListItem)

- Display (the planets in this will change)
  - Planet component (box with an img and text, an Item)

## To pull from API:

- englishName - ""
- isPlanet - boolean
- moons: null/array.map the moon name which is a string
