import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({onSearch}) {
  const [localQuery, setLocalQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(localQuery);
    setLocalQuery('');
  }

  function handleChange(e) {
    setLocalQuery(e.target.value);
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={localQuery} />
      <button type="submit">Знайти</button>
    </form>
  );
}

export default SearchBar;
