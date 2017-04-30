import React from 'react'
import { Layout, Row, Col, Input, Button } from 'antd'

import styles from './ComposePage.scss'

import Container from 'components/ResponsiveContainer'
import EntityList from 'components/EntityList'
import TemplateItemContainer from 'containers/TemplateItemContainer'

const ComposePage = ({}) => (
  <div>
    <Container className={styles['compose-container']}>
      <SearchInput/>
      <EntityList className={styles.list} entityIds={[1,2,3,
      4, 5, 6]} entity={TemplateItemContainer}/>
    </Container>
    <NoFitTip/>
  </div>
)

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  
  render() {
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


import imgNoFitTip from 'assets/compose-no-fit-tip.png'

const NoFitTip = () => {
  return (
    <div className={styles['no-fit-tip']}>
      <Container className={styles.container}>
        <div className={styles['img-wrapper']}>
          <img src={imgNoFitTip} alt=""/>
        </div>
        <div className={styles['tip-wrapper']}>
          <h2>模板都不合适？</h2>
          <p>我们提供免费定制模板服务，只要你上传论文规范，通过后还将获得积分奖励！</p>
          <Button>定制模板</Button>
        </div>
      </Container>
    </div>
  )
}

export default ComposePage