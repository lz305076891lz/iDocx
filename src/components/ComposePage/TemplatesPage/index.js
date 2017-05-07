import React from 'react'
import { Input, Pagination } from 'antd'

import styles from './TemplatesPage.scss'

import EntityList from 'components/EntityList'
import TemplateItemContainer from 'containers/TemplateItemContainer'

const TemplatesPage = () => {
  return (
    <div>
      <SearchInput/>
      <EntityList className={styles.list} entityIds={[1,2,3,
        4, 5, 6]} entity={TemplateItemContainer}/>
      <Pagination simple defaultCurrent={1} total={6} className={styles['pagination']}/>
    </div>
  )
}

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

export default TemplatesPage