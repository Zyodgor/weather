<template>
  <div class="main__week-day">
    <h3 class="main__week-day-title">{{ getWeekDay.charAt().toUpperCase() + getWeekDay.slice(1) }}</h3>
    <p class="main__week-day-date">{{ getDay + ' ' + getMonth }}</p>
    <div class="main__week-day-img">
        <img src="@/assets/img/sun.svg" alt="">
    </div>
    <p class="main__week-day-temp">
        <span>{{ Math.floor(dayObj.temp.max) }}°</span>
        <span>{{ Math.floor(dayObj.temp.min) }}°</span>
    </p>
    <p class="main__week-day-descr">{{ dayObj.weather[0].description }}</p>
  </div>
</template>

<script>
import unix from "@/timestamp";
export default {
  props: ['dayObj'],
  computed: {
    getWeekDay(){
      return unix(this.dayObj.dt, 'weekday')
    },
    getDay(){
      return unix(this.dayObj.dt, 'day')
    },
    getMonth(){
      return unix(this.dayObj.dt, 'month')
    },
  }
}
</script>

<style lang="scss">
.main__week-day{
  border-radius: 10px;
  background: rgba(71, 147, 255, 0.2);
  padding: 11px;
  &-title{
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
  &-date{
    color: rgba(147, 156, 176, 1);
    font-size: 14px;
    line-height: 17px;
    margin: 7px 0 11px;
  }
  &-img{
    width: 48px;
    height: 48px;
    & img{
      width: 100%;
      height: 100%;
    }
  }
  &-temp{
    display: flex;
    flex-direction: column;
    margin: 13px 0 6px;
    & span:nth-of-type(1){
      color: rgba(0, 0, 0, 1);
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
    & span:nth-of-type(2){
      color: rgba(147, 156, 176, 1);
      font-size: 13px;
      line-height: 16px;
    }
  }
  &-descr{
    color: rgba(147, 156, 176, 1);
    font-size: 13px;
    line-height: 16px;
  }
}
</style>