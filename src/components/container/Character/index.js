import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacter } from "redux/сharacters/actions";

import { ALIVE, API_ROOT, DEAD } from "utils/constants";

import Spinner from "components/common/Spinner";

import "./styles.scss";

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

  return (
    <div className="character">
      <div className="character__panel">
        <Link className="character__link" to="/">
          На главную
        </Link>
        <h2 className="character__title">Профиль персонажа</h2>
      </div>

      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <Spinner />
      ) : character ? (
        <div className="character__profile">
          <div className="characterCard__imageWrapper">
            <img
              className="characterCard__image"
              alt={character.name}
              src={character.image}
            />
          </div>

          <div className="characterCard__info">
            <div className="characterCard__title">
              <h3>{character.name}</h3>
            </div>

            <div className="characterCard__row">
              <span
                className={`characterCard__circle ${
                  character.status === ALIVE
                    ? "characterCard__circle_alive"
                    : ""
                } ${
                  character.status === DEAD ? "characterCard__circle_dead" : ""
                }`}
              />
              {character.status} - {character.species} - {character.gender}
            </div>

            <div className="characterCard__location">
              <p>Last known location:</p>
              <p>{character.location.name}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
