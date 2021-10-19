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
        name: 'Rick',
      }),
      createCharacterCard({
        name: 'Morty',
      }),
    ]
  );

  appElement.append(headerElement, mainElement);
}
renderApp();
