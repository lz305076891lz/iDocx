import React from 'react'
import { Input, Pagination } from 'antd'

import styles from './TemplatesPage.scss'
import actions from 'actions'
import imgNoResultTip from 'assets/templates-no-result-tip.png'

import EntityList from 'components/EntityList'
import TemplateItem from 'components/TemplateItem'

class TemplatesPage extends React.Component {
  handleChange = e => {
    this.props.changeSearchValue(e.target.value)
  }
  
  handleSearch = e => {
    this.props.getTemplates(undefined, this.props.searchValue)
  }
  
  handlePageChange = (page, pageSize) => {
    this.props.changePage(page)
    this.props.getTemplates(page)
  }
  
  handleTmplClick = tmplId => {
    this.props.changeChosenTemplate(tmplId)
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
          onSearch={this.handleSearch}
        />
        {this.props.list.length > 0 ?
          <EntityList className={styles.list} entityIds={this.props.list} entity={TemplateItem} onItemClick={this.handleTmplClick}/> :
          <div className={styles['no-result-tip']}>
            <p>抱歉，没有找到您需要的模板</p>
            <img src={imgNoResultTip} alt="没有找到模板"/>
          </div>
        }
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
          onSearch={this.props.onSearch}
        />
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
  },
  changePage(page) {
    dispatch(actions.ui.changeTemplatesPage(page))
  },
  changeSearchValue(value) {
    dispatch(actions.ui.changeTemplatesSearch(value))
  },
  changeChosenTemplate(id) {
    dispatch(actions.ui.changeChosenTemplate(id))
  }
})

export default connect(mapState, mapDispatch)(TemplatesPage)