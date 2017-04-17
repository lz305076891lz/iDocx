import React from 'react'
import { connect } from 'react-redux'

import TemplateItem from 'components/TemplateItem'

const mapState = (state, ownProps) => ({
  template: state.entities.templates[ownProps.entityId]
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(TemplateItem)