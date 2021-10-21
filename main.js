import './style.css';
import { createElement } from './lib/element.js';
import createCharacterCard from './components/characterCard';
import apifetchFunction from './lib/apifetch';
import createSearchBar from './components/searchBar';

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

  const characters = await apifetchFunction(
    'https://rickandmortyapi.com/api/character'
  );

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const searchBar = createSearchBar(function () {
    alert('search');
  });

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    characterCards
  );

  appElement.append(headerElement, searchBar, mainElement);
}
renderApp();
