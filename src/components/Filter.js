import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  const { getUserFilter, search } = props;
  return (
    <label>
      Search
      <input onChange={getUserFilter} type="text" value={search} />
    </label>
  );
};

Filter.propTypes = {
  getUserFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default Filter;
