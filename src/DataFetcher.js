import React, { Component } from 'react';
import data from './stuff.json';

export default class DataFetcher extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data,
    });
  }

  render() {
    return (
      console.log(this.state) || (
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>{el.first_name}</li>
          ))}
        </ul>
      )
    );
  }
}
