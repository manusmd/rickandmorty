import { createElement } from '../lib/element';
import styles from './characterCard.module.css';

export default function createCharacterCard({ name }) {
  const element = createElement(
    'article',
    {
      className: styles.characterCard,
    },
    [
      createElement('img', {
        className: styles.cardImage,
        src: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
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
              ), //Has to be dynamic later
              createElement('p', {
                className: styles.characterStatus,
                textContent: 'Alive', //Has to be dynamic later
              }),
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
              createElement('p', {
                className: styles.characterSpecs,
                textContent: 'Earth', //Has to be dynamic later
              }),
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
              createElement('p', {
                className: styles.characterSpecs,
                textContent: 'Earth', //Has to be dynamic later
              }),
            ]
          ),
        ]
      ),
    ]
  );
  return element;
}
