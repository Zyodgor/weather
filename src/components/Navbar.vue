<template>
  <nav class="nav">
    <a href="" class="nav__logo">
      <img src="@/assets/img/nav-logo.svg" alt="">
      <span>VUE WEATHER</span>
    </a>
    <div class="nav__right">
      <button class="nav__right-theme">
        <img src="@/assets/img/blob.svg" alt="">
      </button>
      <input 
      type="text" 
      class="nav__right-inp"
      placeholder="Выбрать город"
      v-model="query"
      @keydown.enter="getWeather(query)"
      >
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return {
      query: ""
    }
  },
  methods: {
    ...mapActions(['getWeather']),
    // setWeather(){
      // this.$store.dispatch('getWeather', this.query)
      // this.getWeather(this.query)
    // }
  }
}
</script>

<style lang="scss">
.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 30px;
  &__logo{
    display: flex;
    align-items: center;
    gap: 20px;
    & span{
      color: rgba(71, 147, 255, 1);
      font-size: 25px;
      font-weight: 700;
      line-height: 30px;
      text-transform: uppercase;
    }
  }
  &__right{
    display: flex;
    align-items: center;
    gap: 20px;
    &-inp{
      border-radius: 10px;
      background: rgba(71, 147, 255, 0.2);
      padding: 9px 20px;
      &::placeholder{
        color: rgba(0, 0, 0, 1);
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }
}
</style>