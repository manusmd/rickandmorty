import './style.css';
import { createElement } from './lib/element.js';
import createCharacterCard from './components/characterCard';

function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('img', {
        className: 'rickmortyIMG',
        src: 'assets/morty.png',
        alt: '',
      }),
      createElement('h1', {
        textContent: 'Rick and Morty',
      }),
      createElement('img', {
        className: 'rickmortyIMG',
        src: 'assets/rick.png',
        alt: '',
      }),
    ]
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [
      createCharacterCard({
        imgSource: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
        name: 'Alien Rick',
        status: 'Unknown',
        race: 'Alien',
        location: 'Citadel of Ricks',
        firstSeen: 'Close Rick-counters of the Rick Kind',
      }),
      createCharacterCard({
        imgSource: 'https://rickandmortyapi.com/api/character/avatar/126.jpeg',
        name: 'Fleeb',
        status: 'Unknown',
        race: 'Alien',
        location: 'Interdimensional Cable',
        firstSeen: 'Interdimensional Cable 2: Tempting Fate',
      }),
    ]
  );

  appElement.append(headerElement, mainElement);
}
renderApp();
