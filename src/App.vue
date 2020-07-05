<template>
  <div id="app" class="d-flex flex-column h-100">
    <Nav/>
    <div class="app">
      <transition name="app" mode="out-in">
        <router-view class="h-100"/>
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/loyaut/Nav';
import Footer from '@/components/loyaut/Footer';
import { mapActions } from 'vuex';
import * as firebase from 'firebase';

export default {
  name: 'app',
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD8JjQolTpTUkFYNbrKY_tpdKjeq4EOyaY',
      authDomain: 'test-1b306.firebaseapp.com',
      databaseURL: 'https://test-1b306.firebaseio.com',
      projectId: 'test-1b306',
      storageBucket: 'test-1b306.appspot.com',
      messagingSenderId: '881838812021',
    };
    firebase.initializeApp(firebaseConfig);
    this.getUser()
  },
  methods: {
    ...mapActions({
      'getUser': 'user/getUser',
    })
  },
  components: {
    Nav,
    Footer
  }
}
</script>