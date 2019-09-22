import React from "react";
import "../stylesheets/App.scss";
import getDataFromServer from "../services/data";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
//import List from "./List";
//import Item from "./Item";
//import Filter from "./Filter";
import Home from "./Home";
import Detail from "./Detail";

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
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  getUserFilter={this.getUserFilter}
                  search={this.state.search}
                  films={this.state.films}
                  handleFilm={this.handleFilm}
                />
              );
            }}
          />

          <Route path="/detail" component={Detail} />
        </Switch>
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

/* 
        <Filter getUserFilter={this.getUserFilter} search={this.state.search} />
        <List
          films={this.state.films}
          handleFilm={this.handleFilm}
          search={this.state.search}
        /> */
