import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.scss";

const ALIVE = "Alive";

export default function CharacterCard({ item }) {
  return (
    <div className="characterCard">
      <Link to={`/characters/${item.id}`} className="characterCard__content">
        <div className="characterCard__imageWrapper">
          <img
            className="characterCard__image"
            alt={item.name}
            src={item.image}
          />
        </div>

        <div className="characterCard__info">
          <div className="characterCard__title">
            <h3>{item.name}</h3>
          </div>
          <div className="characterCard__row">
            <span
              className={`characterCard__circle ${
                item.status === ALIVE
                  ? "characterCard__circle_active"
                  : "characterCard__circle_dead"
              }`}
            />{" "}
            {item.status} - {item.species}
          </div>
          <div className="characterCard__row">
            <p>Last known location:</p>
            <p>{item.location.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

CharacterCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    location: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};
