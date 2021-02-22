<<<<<<< HEAD
import axios from 'axios';

// We've been using this method in previos steps
=======
//set a common header for requests. We only have to do this once upon login 
//(or when the user refreshes the page when we check to make sure the token has not expired). 

import axios from 'axios';

//method to either set or delete the common header dependent on whether the token is passed into our method
>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
<<<<<<< HEAD
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
=======
>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
};