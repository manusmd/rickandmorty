import { createElement } from '../lib/element';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  image,
  name,
  status,
  species,
  location,
  episode,
}) {
  const firstEpisode = episode[0];
  const firstSeen = createElement('p', {
    className: styles.characterSpecs,
  });

  const locationURL = location.url;
  const characterLocation = createElement(
    'p',
    {
      className: styles.characterSpecs,
    },
    [location.name]
  );

  const element = createElement(
    'article',
    {
      className: styles.characterCard,
    },
    [
      createElement('img', {
        className: styles.cardImage,
        src: image,
        alt: 'Character',
      }),
      createElement(
        'section',
        {
          className: styles.characterDetails,
        },
        [
          createElement(
            'header',
            {
              className: styles.detailsHeader,
            },
            [
              createElement(
                'a',
                {
                  className: styles.characterName,
                },
                [name]
              ),
              createElement(
                'p',
                {
                  className: styles.characterStatus,
                },
                [`${status} - ${species}`]
              ),
            ]
          ),
          createElement(
            'div',
            {
              className: styles.detailsLocation,
            },
            [
              createElement('p', {
                className: styles.characterCardTitles,
                textContent: 'Last known location:',
              }),
              characterLocation,
            ]
          ),
          createElement(
            'div',
            {
              className: styles.detailsFirstSeen,
            },
            [
              createElement('p', {
                className: styles.characterCardTitles,
                textContent: 'First seen in:',
              }),
              firstSeen,
            ]
          ),
        ]
      ),
    ]
  );

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstSeen.textContent = body.name;
    });

  if (locationURL) {
    fetch(locationURL)
      .then((response) => response.json())
      .then((body) => {
        characterLocation.textContent = body.name;
      })
      .catch((error) => console.error(error, locationURL, name));
  }
  return element;
}
