import React from 'react'
import { Layout, Row, Col, Input } from 'antd'

import Container from 'components/ResponsiveContainer'
import Header from 'components/Header'
import HeaderNav from 'components/HeaderNav'
import FooterNav from 'components/FooterNav'

// import styles from './ComposeContent.pcss'

const ComposeContent = ({}) => (
  <div>
    <Container style={{textAlign: 'center'}}>
      <SearchInput/>
    </Container>
  </div>
)

class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render () {
    return (
      <Input.Search size="large" style={{width: '80%'}} placeholder={"dfdf"} value={this.state.value} onChange={this.handleChange}/>
    )
  }
}

export default ComposeContent