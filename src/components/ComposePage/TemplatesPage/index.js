import React from 'react'
import { Input, Pagination } from 'antd'

import styles from './TemplatesPage.scss'

import EntityList from 'components/EntityList'
import TemplateItem from 'components/TemplateItem'

class TemplatesPage extends React.Component {
  handleChange = e => {
    
  }
  
  handlePageChange = (page, pageSize) => {
  
  }
  
  render() {
    return (
      <div>
        <SearchInput
          value={this.props.searchValue}
          onChange={this.handleChange}
        />
        <EntityList className={styles.list} entityIds={this.props.templateList} entity={TemplateItem}/>
        <Pagination
          simple
          defaultCurrent={1}
          total={6}
          pageSize={8}
          onChange={this.handlePageChange}
          className={styles['pagination']}/>
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

import { connect } from 'react-redux'

const mapState = state => {
  const page = state.ui.pageCompose.pageTemplates
  
  return {
    templateList: page.list,
    searchValue: page.searchValue
  }
}

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(TemplatesPage)