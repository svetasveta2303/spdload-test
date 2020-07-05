<template>
  <div class="head position-absolute w-100">
    <b-navbar toggleable="lg" type="dark" >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <div v-if="!loaderGetUser">
              <router-link 
                v-if="user && user.email"
                class="link" 
                to="about"
              >
              {{ user.email }}
              </router-link>
              <router-link v-else class="link" to="sign-in"> Sign In </router-link>
              <button 
                v-if="user && user.email"
                class="sugn-out link"
                v-b-modal.exit
              > 
                Exit 
              </button>
              <router-link v-else class="link" to="sign-up"> Sign Up </router-link>
            </div>
              <div v-else class="clearfix">
                <b-spinner class="float-right" variant="light" label="Floated Right"></b-spinner>
              </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-modal id="exit" v-model="show">
        <p class="my-4"> Do you really want to go out ?! </p>
        <template v-slot:modal-footer >
          <b-button class="mt-3" @click="show=false"> Close </b-button>
          <b-button class="mt-3" @click="submitSignOut"> Yes </b-button>
        </template>
      </b-modal>
    <transition :name="`error${$route.name}`">
      <div v-if="error" :class="['position-absolute text-center modal-error border-0' , $route.name]">
        {{error}}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data:()=>({
    show: false
  }),
  computed:{
    ...mapState({
      user: state => state.user.user,
      loaderGetUser: state => state.user.loaderGetUser,
      error: state => state.user.error
    }),
  },

  methods: {
    ...mapActions({
      'getUser': 'user/getUser',
      'signOut': "user/signOut"
    }),
    submitSignOut() {
      this.signOut();
      if(this.$route.meta.auth) {
        this.$router.push({name: 'home'});
      }
      this.show = !this.show;
    }
  }
}
</script>
