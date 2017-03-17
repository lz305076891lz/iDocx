import React from 'react'

export default class ResbonsiveContainer extends React.Component {
  render () {
    return (
      <div {...this.props} className="container">
        {this.props.children}
      </div>
    )
  }
}