import React from "react";
import "../stylesheets/App.scss";
import getDataFromServer from "../services/data";
import List from "./List";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Item from "./Item";
import Filter from "./Filter";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      films: [],
      search: ""
    };
    this.handleFilm = this.handleFilm.bind(this);
    this.getUserFilter = this.getUserFilter.bind(this);
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      const films = data.results.map(film => {
        return {
          ...film,
          favorite: false
        };
      });
      this.setState({
        films: films
      });
      console.log(this.state.films);
    });
  }
  handleFilm(id) {
    const newFilm = this.state.films.map(film => {
      let favorite = film.favorite;
      if (film.id === id) {
        favorite = !favorite;
      }
      return {
        ...film,
        favorite: favorite
      };
    });
    this.setState({
      films: newFilm
    });
  }
  getUserFilter(event) {
    const search = event.currentTarget.value;

    this.setState({
      search: search
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Filter getUserFilter={this.getUserFilter} search={this.state.search} />
        <List
          films={this.state.films}
          handleFilm={this.handleFilm}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;

/*       <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <List films={this.state.films} handleFilm={this.handleFilm} />
            )}
          />
          <Route
            path="/detail/:id"
            render={routerProps => <Item match={routerProps.match} />}
          />
        </Switch> */
