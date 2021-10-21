import { createElement } from '../lib/element';
import styles from './searchBar.module.css';

export default function createSearchBar(onSubmit) {
  const searchInput = createElement('input', {
    className: styles.searchInput,
    placeholder: 'Search for a character',
  });
  const searchButton = createElement('input', {
    className: styles.searchButton,
    type: 'submit',
    value: 'Search',
  });

  return createElement(
    'form',
    {
      className: styles.searchForm,
      onsubmit: (event) => {
        event.preventDefault();
        onSubmit(searchInput.value);
      },
    },
    [searchInput, searchButton]
  );
}
