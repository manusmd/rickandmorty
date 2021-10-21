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

  async function handleSubmit(search) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${search}`
    );
    const body = await response.json();
    const characters = body.results.map((character) =>
      createCharacterCard(character)
    );
    mainElement.innerHTML = '';
    mainElement.append(...characters);
  }

  const searchBar = createSearchBar(handleSubmit);

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
