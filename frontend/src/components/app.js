import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
<<<<<<< HEAD

import TweetsContainer from "./tweets/tweets_container";
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from "./profile/profile_container"
import TweetComposeContainer from "./tweets/tweet_compose_container";

=======
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


//navigation bar that appears on every page
//forms that allow our users to sign up or login.
>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
<<<<<<< HEAD
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
=======
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
    </Switch>
  </div>
);

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
