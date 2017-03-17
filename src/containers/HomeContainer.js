import { connect } from 'react-redux'
import HomeContent from 'components/HomeContent'

const mapStateToProps = (state,  ownProps) => ({
  menuData: state.headerNav,
  pageData: state.homePages
})

const HomeContainer = connect(
  mapStateToProps
)(HomeContent)

export default HomeContainer