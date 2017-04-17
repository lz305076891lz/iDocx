import React from 'react'
import { Layout, Row, Col, Input } from 'antd'

import Container from 'components/ResponsiveContainer'

import styles from './ComposePage.scss'

const ComposePage = ({}) => (
  <div>
    <Container className={styles['compose-container']}>
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
    <div className={styles['search-input']}>
      <Input.Search size="large" placeholder={"输入学校名称查找相应模板"} value={this.state.value} onChange={this.handleChange}/>
      <p>
        <span>国家标准格式论文模板</span>
        <span>华中科技大学硕士论文模板</span>
        <span>华中科技大学博士论文模板</span>
      </p>
    </div>
  )
  }
}

export default ComposePage