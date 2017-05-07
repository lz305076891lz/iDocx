import {connect} from 'react-redux'
import TemplatesPage from 'components/ComposePage/TemplatesPage'

const mapState = state => ({
  templates: state.entities.templates
})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(TemplatesPage)