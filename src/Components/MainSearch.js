import React, { useState } from "react";
import styles from "./mainSearch.module.css";
import axios from "axios";

const MainSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);

  const searchHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
    );

    setResult([res.data[0]]);
  };

  return (
    <>
      <div className={styles.searchDiv}>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="search"
            className={styles.searchInput}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
      </div>
      <div className={styles.resultDiv}>
        {result.length > 0 && (
          <div>
            {console.log(result)}
            {result.map((item, index) => (
              <div key={index}>
                <h1>{item.word}</h1>
                {item.phonetic && <div>{item.phonetic}</div>}
                {/* for conditional audio */}
                {item.phonetics.length > 0 &&
                  item.phonetics.map((val, i) => {
                    // {console.log("phonetics" , val)}
                    if (val.audio) {
                      // {console.log("val audio running")}
                      return (
                        <div key={i} className={styles.audioDiv}>
                          <audio controls key={i}>
                            <source src={val.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      );
                    }
                  })}
                {/* for conditional definitions */}
                {item.meanings.length > 0 &&
                  item.meanings.map((val, i) => {
                    return (
                      <div key={i}>
                        <h3>{val.partOfSpeech}</h3>
                        {/* {val.antonyms.length > 0 &&val.antonyms.map((def, i) => {
                                return(
                                    <div>{def.definition}</div>
                                )
                            })} */}
                        {val.definitions.length > 0 &&
                          val.definitions.map((def, i) => {
                            return (
                              <ul>
                                <li>{def.definition}</li>
                              </ul>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MainSearch;
