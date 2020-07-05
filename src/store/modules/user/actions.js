import * as types from './mutation-types';
import * as firebase from "firebase/app";

export default {
  signIn({ dispatch }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => dispatch('getUser'))
    .catch((error) => dispatch('error', error))
  },

  error({ commit }, payload) {
    commit(types.SET_ERROR, payload.message)
    setTimeout(() => {
      commit(types.SET_ERROR, false)
    }, 2000)
  },

  signUp({ dispatch }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(() => dispatch('getUser'))
    .catch((error) => dispatch('error', error))
  },

  getUser({ commit }) {
    firebase.auth().onAuthStateChanged(()=> {
      if (firebase.auth().currentUser) {
        localStorage.token = firebase.auth().currentUser.uid
        commit(types.SET_USER_DATA, {
          user: firebase.auth().currentUser,
          loaderGetUser: false,
          error: false
        });
      } else {
        commit(types.SET_USER_DATA, {
          user: {}, 
          loaderGetUser: false,
          error: false
        });
      }
    });
  },
  google({ dispatch }) {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(() => dispatch('getUser'))
    .catch((error) => dispatch('error', error))

  },
  signOut({ commit, dispatch }) {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('token');
      commit(types.SET_USER_DATA, { auth: {}, loaderGetUser: false });
    }).catch((error) => dispatch('error', error));    
  }
};
