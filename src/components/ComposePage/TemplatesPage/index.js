import React from 'react';
import { Input, Pagination } from 'antd';
import { connect } from 'react-redux';

import styles from './TemplatesPage.scss';
import imgNoResultTip from '../../../assets/templates-no-result-tip.png';

import EntityList from '../../EntityList';
import TemplateItem from '../../TemplateItem';

import {
  changeChosenTemplate,
  changeTemplatesPage,
  changeTemplatesSearch,
} from '../../../actions/compose';
import { getTemplates } from '../../../actions/entities';

class TemplatesPage extends React.Component {
  handleChange = (e) => {
    this.props.changeTemplatesSearch(e.target.value);
  }

  handleSearch = (e) => {
    this.props.getTemplates({
      search: this.props.searchValue,
    });
  }

  handlePageChange = (page) => {
    this.props.changeTemplatesPage(page);
    this.props.getTemplates({
      page,
      search: this.props.searchValue,
    });
  }

  handleTmplClick = (tmplId) => {
    this.props.changeChosenTemplate(tmplId);
  }

  componentDidMount() {
    this.props.getTemplates({
      page: this.props.page !== -1 ? this.props.page : 1,
    });
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
          className={styles.pagination}/>
      </div>
    );
  }
}

class SearchInput extends React.Component {
  render() {
    return (
      <div className={styles['search-input']}>
        <Input.Search
          size="large"
          placeholder={'输入学校名称查找相应模板'}
          value={this.props.value}
          onChange={this.props.onChange}
          onSearch={this.props.onSearch}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  const page = state.compose.template;

  return {
    ...page,
  };
};

const mapDispatch = {
  getTemplates,
  changeTemplatesPage,
  changeTemplatesSearch,
  changeChosenTemplate,
};

export default connect(mapState, mapDispatch)(TemplatesPage);
