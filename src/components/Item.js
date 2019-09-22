import React from "react";
import heartImage from "../images/heart.svg";

const Item = props => {
  const handleChangeButton = () => {
    props.handleFilm(props.film.id);
  };
  //console.log(this.props.match);
  return (
    <div
      className={
        props.film.favorite === true
          ? "film_container favorite"
          : "film_container"
      }
    >
      <button className="film_heart" onClick={handleChangeButton}>
        <img className="film_img-btn" src={heartImage} alt="icon favorite" />
      </button>
      <h2 className="film_title">{props.film.title}</h2>
      <img src={props.film.image} alt="film" />
      <h4 className="film_date">Year: {props.film.release_date}</h4>
      <p className="film_description">Description: {props.film.description}</p>
      <button className="film_showMore-btn">
        <a href={props.film.imdb}>Show info</a>
      </button>
      <p className="film_director">Director: {props.film.director}</p>
      <p className="film_producer">Producer: {props.film.producer}</p>
      <p className="film_score">Score: {props.film.rt_score}</p>
      <button className="film_streamin-btn">
        <a href={props.film.streaming}> Streaming</a>
      </button>
    </div>
  );
};

export default Item;
