<template>
 <div class="sign">
    <div class="sign-form d-flex align-items-center justify-content-center position-relative ml-auto">
      <div class="form">
        <p class="text-center sign-text"> Sign In </p>
        <form 
          @submit.prevent="submit" 
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <input v-model="email" type="email" class="w-100" required>
          <input v-model="password" type="password" class="w-100" required>
          <button class="submit-btn w-50 border-0"> Sign In </button>
          <div class="border-block"></div>
        </form>
        <div class="w-100 text-center">
          <button @click="authGoogle" class="google border-0"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mixin } from '@/mixins/index';

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  mixins: [ mixin ],
  methods: {
    ...mapActions({
      'signIn': 'user/signIn',
      'google': 'user/google',
      'signOut': 'user/signOut'

    }),
    submit() {
      const { email, password } = this;
      this.signIn({ email, password});
    },
    authGoogle() {
      this.google();
    }
  }
}
</script>
