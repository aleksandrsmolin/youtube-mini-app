import React, { Component } from 'react';


class SearchBar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          term : 'noob', 
      };
      this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return <input onChange={this.onInputChange} />;
  }
  onInputChange(event) {
    const newTerm = event.taget.value;
    this.setState ({
        term: newTerm,
    })
  }
};

export default SearchBar;