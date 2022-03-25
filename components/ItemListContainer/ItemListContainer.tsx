import React, { useState, useEffect } from "react";
import { Authors, Film, Films } from "../../types/types";
import Item from "../Item/Item";
import {
  shuffleArray,
  duplicateElement,
  authorChange,
  changeRate,
} from "../../utils/utils";

function ItemListContainer({ items }: { items: Films }) {
  const [movies, setMovies] = useState<Films>([]);

  const [renderMovies, setRenderMovies] = useState<Films>([]);

  useEffect(() => {
    setMovies(items);
  }, []);

  useEffect(() => {
    setRenderMovies(movies);
  }, [movies]);

  function shuffle(array: Films) {
    setMovies(shuffleArray(array));
  }

  function duplicate(array: Films, id: string) {
    setMovies(duplicateElement(array, id));
  }

  function changeAuthor(array: Films, authorId: string, itemId: string) {
    setMovies(authorChange(array, authorId, itemId));
  }

  function randomRate(array: Films) {
    setMovies(changeRate(array));
  }

  return (
    <>
      {renderMovies.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            items={renderMovies}
            duplicateFunction={duplicate}
            changeAuthor={changeAuthor}
          />
        );
      })}
      <button onClick={() => shuffle(movies)}>Randomize Movies</button>
      <button onClick={() => randomRate(movies)}>Change Rate</button>
    </>
  );
}

export default React.memo(ItemListContainer);
