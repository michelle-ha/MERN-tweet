import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

<<<<<<< HEAD
=======
//We'll use the isAuthenticated boolean in our state to determine which set of links to render, 
//so we'll need to map state to props. We also want to map our logout action to this component 
//so that our user always has the option to end their session. 

>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
<<<<<<< HEAD
)(NavBar);
=======
)(NavBar);

>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
