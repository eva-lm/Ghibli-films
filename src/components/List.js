import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

const List = props => {
  const { films, search } = props;
  return (
    <ul className="film_list">
      {films
        .filter(item => item.title.toUpperCase().includes(search.toUpperCase()))
        .map((film, index) => {
          return (
            <li className="film_item" key={index}>
              <Item film={film} handleFilm={props.handleFilm} />
            </li>
          );
        })}
    </ul>
  );
};

List.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired
};
export default List;
