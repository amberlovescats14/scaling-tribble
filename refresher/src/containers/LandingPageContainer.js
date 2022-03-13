import LandingPageComponent from '../components/LandingPageComponent'
import { connect } from 'react-redux'
import { getPrinciples } from '../redux/Reducers'

console.log('container');
const mapStateToProps = state => ({
  test: state.test,
  principlesObject: state.principlesObject
})

const mapDispatchToProps = dispatch => ({
  getPrinciples : () => dispatch(getPrinciples())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageComponent)