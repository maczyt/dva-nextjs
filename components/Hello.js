import React, { Component } from 'react';
import api from '../services/api'

export default class extends Component {
  state = {
    articles: null,
  }
  componentDidMount() {
    api.get('/topics?limit=5')
    .then(response => {
      return response.data;
    })
    .then(data => {
      this.setState({
        articles: data.data,
      })
    })
  }
  render() {
    return (
      <ul>
        {
          this.state.articles && this.state.articles.map((a, index) => {
            return <li key={index}>{a.title}</li>
          })
        }
      </ul>
    )
  }
}