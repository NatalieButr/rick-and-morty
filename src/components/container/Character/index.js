import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacter } from "redux/сharacters/actions";

import { API_ROOT } from "utils/constants";

export default function Character() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { character, isLoading } = useSelector((state) => ({
    character: state.characters.character,
    isLoading: state.loader.isLoading,
  }));

  useEffect(() => {
    dispatch(fetchCharacter(`${API_ROOT}/character/${id}`));
  }, [id, dispatch]);

  console.log(id, character, isLoading);
  return (
    <div className="character">
      <div className="character__panel">
        <Link to="/">На главную</Link>
      </div>
    </div>
  );
}
