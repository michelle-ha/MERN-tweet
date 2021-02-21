import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

//We'll use the isAuthenticated boolean in our state to determine which set of links to render, 
//so we'll need to map state to props. We also want to map our logout action to this component 
//so that our user always has the option to end their session. 

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);

