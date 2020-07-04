<template>
 <div class="sign">
    <div class="sign-form d-flex align-items-center justify-content-center">
      <div class="form">
        <p class="text-center sign-text">Sign In</p>
        <form @submit.prevent="submit" class="d-flex flex-column align-items-center justify-content-center">
          <input v-model="email" type="email" required>
          <input v-model="password" type="password" required>
          <button class="submit-btn">Sign In</button>
          <div class="border-block"></div>
          <button @click="authGoogle" class="google"></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions({
      'signIn': 'user/signIn',
      "google": 'user/google'
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

<style lang="scss">
</style>