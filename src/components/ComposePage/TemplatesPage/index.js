import React from 'react';
import {Input, Pagination} from 'antd';
import {connect} from 'react-redux';

import styles from './TemplatesPage.scss';
import imgNoResultTip from '../../../assets/templates-no-result-tip.png';

import EntityList from '../../EntityList';
import TemplateItem from '../../TemplateItem';
import {
    changeChosenTemplate,
    changeTemplatesPage,
    changeTemplatesSearch,
    changeTemplatesType,
} from '../../../actions/compose';
import {getTemplates} from '../../../actions/entities';

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
      const pathInf = this.props.match.path.substring(9);
      if (pathInf === 'ebook') {
          this.props.changeTemplatesType('2');
      } else {
          this.props.changeTemplatesType('1');
      }
    this.props.changeChosenTemplate(tmplId);
  }
    SELTYPE = '1';

    componentDidUpdate() {
        const pathInf = this.props.match.path.substring(9);
        if (pathInf === 'ebook') {
            this.props.changeTemplatesType('2');
            if (this.SELTYPE === '1') {
                this.props.getTemplates({
                    page: this.props.page !== -1 ? this.props.page : 1,
                    searchtype: 2,
                });
            }
            this.SELTYPE = '2';
        } else {
            this.props.changeTemplatesType('1');
            if (this.SELTYPE === '2') {
                this.props.getTemplates({
                    page: this.props.page !== -1 ? this.props.page : 1,
                    searchType: 1,
                });
            }
            this.SELTYPE = '1';
        }
        console.log(this.props.match.path);
    }

    componentDidMount() {
        const sharetemp = this.props.match.params.tempid;
        const pathInf = this.props.match.path.substring(9);
        // console.log(pathInf);
        if (!sharetemp) {
            this.props.getTemplates({
                page: this.props.page !== -1 ? this.props.page : 1,
            });
        } else {
            this.props.getTemplates({
                search: sharetemp,
            });

            var tempnum = sharetemp.split('_');
            if (tempnum.length === 2) {
                this.props.changeChosenTemplate(tempnum[1]);
                /*
                if (parseInt(tempnum[0],10)===tempnum[0] && parseInt(tempnum[1],10)===tempnum[1]) {
                  this.props.changeChosenTemplate(tempnum[1]);
                } else {
                  this.props.changeChosenTemplate(sharetemp);
                }
                */
            } else {
                this.props.changeChosenTemplate(sharetemp);
            }
            // console.log(this.props);
            // setTimeout("javascript:location.href='/compose/upload'", 500);
            this.props.history.push('/compose/upload');
        }
        if (pathInf === 'ebook') {
            this.props.changeTemplatesType('2');

            this.props.getTemplates({
                page: this.props.page !== -1 ? this.props.page : 1,
                searchtype: 2,
            });
        } else {
            this.props.changeTemplatesType('1');
        }
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
          placeholder={'输入关键词，查找模板'}
          value={this.props.value}
          onChange={this.props.onChange}
          onSearch={this.props.onSearch}
          enterButton={'搜索'}
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
    changeTemplatesType,
  getTemplates,
  changeTemplatesPage,
  changeTemplatesSearch,
  changeChosenTemplate,


};

export default connect(mapState, mapDispatch)(TemplatesPage);
