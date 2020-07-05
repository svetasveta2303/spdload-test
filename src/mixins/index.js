import { mapState } from "vuex"

export const mixin = {
  created() {
    if(localStorage.token) this.signOut();
  },
  computed: {
    ...mapState({
      user: state =>  state.user.user
    })
  },
  watch: {
    user() {
      if( Object.keys(this.user).length !== 0 ) this.$router.push({name: 'home'});
    }
  }
}