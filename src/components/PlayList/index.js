import React, { Component } from 'react';
import PlayListItem from '../PlayListItem/index.js'

class PlayList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: {}
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({ songs: data });
    })
  }

  render () {
    return (
    <div className=''>
      <PlayListItem songs={this.state.songs}/>
    </div>)
  }
}

export default PlayList;
