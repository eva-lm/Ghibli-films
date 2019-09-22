import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Detail = props => {
  return (
    <React.Fragment>
      <div className="film_detail">Soy el detalle</div>
      <Link to="/" className="app__back">
        Back to List
      </Link>
    </React.Fragment>
  );
};

export default Detail;
