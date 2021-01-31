import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "redux/сharacters/actions";

export default () => {
  let characters = useSelector((state) => state.characters.characterList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  console.log(characters);
  return <div>dkdk</div>;
};
