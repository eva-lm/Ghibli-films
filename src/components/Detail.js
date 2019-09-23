import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Detail = props => {
  const { routerProps, films } = props;
  const filmId = routerProps.match.params.id;

  const filmDetail = films.filter(item => item.id === filmId);

  if (filmDetail[0]) {
    const { title, image, release_date, description } = filmDetail[0];
    return (
      <React.Fragment>
        <div className="film_detail">
          <h2 className="film-detail__title">{title}</h2>
          <div className="film-detail__image">
            <img src={image} alt={title} />
          </div>
          <p className="film-detail__date">{release_date}</p>
          <p className="film-detail__description">{description}</p>
        </div>
        <Link to="/" className="app__back">
          Back to List
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Esta página no existe</p>
        <Link to="/" className="app__back">
          Back to List
        </Link>
      </React.Fragment>
    );
  }
};

Detail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Detail;
