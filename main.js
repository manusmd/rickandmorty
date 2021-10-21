import './style.css';
import { createElement } from './lib/element.js';
import createCharacterCard from './components/characterCard';

async function renderApp() {
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

  const characterResponse = await fetch(
    'https://rickandmortyapi.com/api/character'
  );
  const body = await characterResponse.json();
  console.log(body);
  const characters = body.results;

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );
  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    characterCards
  );

  appElement.append(headerElement, mainElement);
}
renderApp();
