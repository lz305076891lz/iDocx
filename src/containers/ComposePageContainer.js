import { connect } from 'react-redux'
import ComposePage from 'components/ComposePage'

const mapState = state => ({
})

const ComposePageContainer = connect(mapState)(ComposePage)

export default ComposePageContainer