import React from 'react';
import styles from "./mainSearch.module.css"

const MainSearch = () => {

    const searchHandler = async(e) => {
        e.preventDefault();
    }

  return (
    <>
        <div className={styles.searchDiv}>
            <form onSubmit={searchHandler}>
            <input type='text' placeholder='search' className={styles.searchInput}/>
            <button type='submit' className={styles.searchBtn}>Search</button>
            </form>
        </div>
        <div className={styles.resultDiv}>
            Result:
        </div>
    </>
  )
}

export default MainSearch