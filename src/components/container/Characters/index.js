import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters, fetchMoreCharacters } from "redux/сharacters/actions";

import { API_ROOT } from "utils/constants";

import Spinner from "components/common/Spinner";
import CharacterCard from "./CharacterCard";

import "./styles.scss";

export default function Characters() {
  let { characters, info, isLoading } = useSelector((state) => ({
    characters: state.characters.characterList,
    info: state.characters.info,
    isLoading: state.loader.isLoading,
  }));

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const dispatch = useDispatch();

  const fetch = useCallback(
    (url) => {
      dispatch(fetchCharacters(url));
    },
    [dispatch],
  );

  useEffect(() => {
    if (isLoadingMore && !isLoading) {
      dispatch(fetchMoreCharacters(info?.next));
      setIsLoadingMore(false);
    }
  }, [dispatch, fetch, info, isLoadingMore, isLoading]);

  useEffect(() => {
    fetch(`${API_ROOT}/character`);
  }, [dispatch, fetch]);

  const observeBorder = useCallback(
    (node) => {
      if (node !== null) {
        new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (
                en.intersectionRatio === 1 &&
                info?.next &&
                !isLoadingMore &&
                !isLoading
              ) {
                setIsLoadingMore(true);
              }
            });
          },
          { threshold: 1 },
        ).observe(node);
      }
    },
    [info, isLoading, isLoadingMore],
  );

  console.log(characters);

  return (
    <div className="characters">
      {characters.map((item) => (
        <CharacterCard key={item.id} item={item} />
      ))}

      {isLoading && (
        <div className="characters__loading">
          <Spinner />
        </div>
      )}

      <div ref={observeBorder} className="characters__bottom" />
    </div>
  );
}
