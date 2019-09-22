import React, { Fragment } from "react";
import Filter from "./Filter";
import List from "./List";
import PropTypes from "prop-types";

const Home = props => {
  const { getUserFilter, search, films, handleFilm } = props;

  return (
    <Fragment>
      <Filter getUserFilter={getUserFilter} search={search} />
      <List films={films} handleFilm={handleFilm} search={search} />
    </Fragment>
  );
};

Home.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  getUserFilter: PropTypes.func.isRequired,
  handleFilm: PropTypes.func.isRequired
};

export default Home;
