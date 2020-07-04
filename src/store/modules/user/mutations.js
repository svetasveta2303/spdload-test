/* eslint-disable no-param-reassign */
import { SET_USER_DATA, SET_ERROR } from './mutation-types';

export default {
  [SET_USER_DATA](state,  { user, loaderGetUser, error } ) {
    state.user = user;
    state.loaderGetUser = loaderGetUser;
    state.error = error;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
};
