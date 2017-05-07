import React from 'react'
import { Input, Pagination } from 'antd'

import styles from './TemplatesPage.scss'

import EntityList from 'components/EntityList'
import TemplateItemContainer from 'containers/TemplateItemContainer'

class TemplatesPage extends React.Component {
  state = {
    searchValue: ''
  }
  
  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  
  render() {
    let templateIds = Object.keys(this.props.templates)
    
    return (
      <div>
        <SearchInput
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <EntityList className={styles.list} entityIds={templateIds} entity={TemplateItemContainer}/>
        <Pagination simple defaultCurrent={1} total={6} className={styles['pagination']}/>
      </div>
    )
  }
}

class SearchInput extends React.Component {
  
  render() {
    return (
      <div className={styles['search-input']}>
        <Input.Search
          size="large"
          placeholder={"输入学校名称查找相应模板"}
          value={this.props.value}
          onChange={this.props.onChange}
        />
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