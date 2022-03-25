import React, { ChangeEvent, useState } from "react";
import { Film, Films } from "../../types/types";
import styles from "../../styles/Home.module.css";
import { authorList } from "../../data/authors";

function Item({
  item,
  duplicateFunction,
  items,
  changeAuthor,
}: {
  item: Film;
  duplicateFunction: Function;
  items: Films;
  changeAuthor: Function;
}) {
  const [currentAuthor, setCurrentAuthor] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentAuthor(e.target.value);
  };

  return (
    <div className={styles.card} key={item.id}>
      <a>
        <h3>{item.name}</h3>
        <h4>Rate: {item.rate}</h4>
        <label className="genero">Change Author: </label>
        <select className="input" id="authorSelect" onChange={handleChange}>
          <option value="hello">--Change Author--</option>
          {authorList.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
        <button
          type="button"
          onClick={() => changeAuthor(items, currentAuthor, item.id)}
        >
          Apply Changes
        </button>
        <button onClick={() => duplicateFunction(items, item.id)}>
          Duplicate
        </button>
      </a>
    </div>
  );
}

export default React.memo(Item);
