//set a common header for requests. We only have to do this once upon login 
//(or when the user refreshes the page when we check to make sure the token has not expired). 

import axios from 'axios';

//method to either set or delete the common header dependent on whether the token is passed into our method
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};