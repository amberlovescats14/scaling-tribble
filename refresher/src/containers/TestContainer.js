import TestComponent from '../components/TestComponent'
import { connect } from 'react-redux'
import { getPrinciples } from '../redux/Reducers'

console.log('containerTestComponent');
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)