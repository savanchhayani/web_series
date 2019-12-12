import React, { Component } from 'react'

export default class WebSeriesList extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="web-series-list--container">
        {lists.map(item => <div>{item.name}</div>)}
      </div>
    )
  }
}
