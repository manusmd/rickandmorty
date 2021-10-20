import { createElement } from '../lib/element';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  imgSource,
  name,
  status,
  race,
  location,
  firstSeen,
}) {
  const element = createElement(
    'article',
    {
      className: styles.characterCard,
    },
    [
      createElement('img', {
        className: styles.cardImage,
        src: imgSource,
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
                [`${status} - ${race}`]
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
              createElement(
                'p',
                {
                  className: styles.characterSpecs,
                },
                [location]
              ),
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
              createElement(
                'p',
                {
                  className: styles.characterSpecs,
                },
                [firstSeen]
              ),
            ]
          ),
        ]
      ),
    ]
  );
  return element;
}
