import LandingPageComponent from '../components/LandingPageComponent'
import {connect} from 'react-redux'
import {getPrinciples} from '../redux/Reducers'

const mapStateToProps = state => ({
  test: state.test,
  principlesObject: state.getPrinciples
})

const mapDispatchToProps = dispatch => ({
  getPrinciples : () => dispatch(getPrinciples())
})

export default connect({mapStateToProps, mapDispatchToProps})(LandingPageComponent)