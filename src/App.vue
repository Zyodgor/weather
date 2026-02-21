<template>
  <div class="container" v-if="getFullWeather">
    <Navbar/>
    <Main/>
  </div>
  <div class="loading" v-else>Loading...</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Main from "@/components/Main.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Navbar,
    Main
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  computed: {
    ...mapGetters(['getFullWeather'])
  },
  mounted(){
    this.getWeather('Tashkent')
  }
}
</script>

<style>
.loading{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
}
</style>