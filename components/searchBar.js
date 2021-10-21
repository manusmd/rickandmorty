import { createElement } from '../lib/element';
import styles from './searchBar.module.css';

export default function createSearchBar(onSubmit) {
  const element = createElement(
    'form',
    {
      className: styles.searchForm,
      onsubmit: onSubmit,
    },
    [
      createElement('input', {
        className: styles.searchInput,
        placeholder: 'Search',
      }),
      createElement('button', {
        className: styles.searchButton,
        type: 'submit',
        textContent: 'Search',
      }),
    ]
  );
  return element;
}
