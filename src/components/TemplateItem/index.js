import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Col} from 'antd';

import styles from './TemplateItem.scss';
import {connect} from 'react-redux';

const TemplateItem = ({ template, linkTo = '/compose/upload', onClick }) => (
    <Col span={6} className={styles['template-item-wrapper']}>
      <Link to={linkTo} onClick={() => onClick(template.id)}>
        <Card bordered={false} className={styles['template-item']}>
          <div className={styles['img-wrapper']}>
            <img src={template.coverSrc} alt={template.title}/>
          </div>
          <h5>{template.title}</h5>
          <p>
            {/* <span className={styles.preview}>预览</span> */}
            {/* <span className={styles.type}>{template.type.name}</span> */}
          </p>
        </Card>
      </Link>
    </Col>
);

const mapState = (state, ownProps) => ({
  template: state.entities.templates[ownProps.entityId],
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(TemplateItem);
