import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd'

@connect(state => ({
  error: state.error,
}))
export default class ErrorHandler extends React.Component {
  componentDidUpdate({ error: prevError }) {
    if (prevError !== this.props.error) {
      message.error(this.props.error.message);
    }
  }

  render() {
    return null;
  }
}
