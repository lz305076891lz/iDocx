import React from 'react'
import { Input, Pagination } from 'antd'

import styles from './TemplatesPage.scss'
import actions from 'actions'

import EntityList from 'components/EntityList'
import TemplateItem from 'components/TemplateItem'

class TemplatesPage extends React.Component {
  handleChange = e => {
  
  }
  
  handlePageChange = (page, pageSize) => {
  
  }
  
  componentDidMount() {
    this.props.getTemplates(~this.props.page ? this.props.page : 1)
  }
  
  render() {
    return (
      <div>
        <SearchInput
          value={this.props.searchValue}
          onChange={this.handleChange}
        />
        <EntityList className={styles.list} entityIds={this.props.list} entity={TemplateItem}/>
        <Pagination
          simple
          current={this.props.page}
          defaultCurrent={1}
          total={this.props.total}
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
    ...page
  }
}

const mapDispatch = dispatch => ({
  getTemplates(page, search) {
    return dispatch(actions.templates.getTemplates(page, search))
  }
})

export default connect(mapState, mapDispatch)(TemplatesPage)