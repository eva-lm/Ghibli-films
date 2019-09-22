import React from "react";
import Item from "./Item";

const List = props => {
  return (
    <ul className="film_list">
      {props.films.map((film, index) => {
        return (
          <li className="film_item" key={index}>
            <Item film={film} handleFilm={props.handleFilm} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
