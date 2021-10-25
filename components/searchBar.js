import { createElement } from '../lib/element';
import styles from './searchBar.module.css';

export default function createSearchBar(onSubmit) {
  let timeoutID;
  const searchInput = createElement('input', {
    className: styles.searchInput,
    placeholder: 'Search for a character',
    oninput: () => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        onSubmit(searchInput.value);
      }, 300);
    },
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
    },
    [searchInput, searchButton]
  );
}
