import React, { Component } from "react";
import ReactDom from "react-dom";

import { CardList } from "./components/cardlist/card-list.components";
import { SearchBox } from "./components/search-Box/search-box.component";
import "./Monsters.css";

// React component
class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="Monsters">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder=" search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

ReactDom.render(<Monsters />, document.getElementById("root"));
