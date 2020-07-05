<template>
  <div class="footer position-absolute w-100">
    <div class="footer-date d-flex">
      <p class="text-right"> {{ dateNow }} </p>
      <p> {{ time }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: Date.now()
  }),
  computed: {
    dateNow() {
      return `${(new Date(this.date)).toLocaleDateString()} `;
    },
    time() {
      let hour = new Date(this.date).getHours() < 10 ? `0${new Date(this.date).getHours()}` : new Date(this.date).getHours();
      let minutes = new Date(this.date).getMinutes() < 10 ? `0${new Date(this.date).getMinutes()}` : new Date(this.date).getMinutes();
      let second = new Date(this.date).getSeconds() < 10 ? `0${new Date(this.date).getSeconds()}` : new Date(this.date).getSeconds();
      return `${hour}:${minutes}:${second}`;
    }
  },
    created() {
      this.intervalId = setInterval(() => this.date = Date.now(), 1000);
    },
    beforeDestroy() {
      if ( this.intervalId ) clearInterval(this.intervalId);
    }
}
</script>
