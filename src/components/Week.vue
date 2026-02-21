<template>
  <div class="main__week">
    <div class="main__week-btns">
        <button class="main__week-btn" @click="openClose" :class="{active: showWeek}">На неделю</button>
        <button class="main__week-btn" v-show="showWeek" @click="showWeek = false">Отменить</button>
    </div>
    <div class="main__week-days" v-show="showWeek">
        <Day 
        v-for="dayObj in getDailyWeather"
        :key="dayObj.dt"
        :dayObj="dayObj"
        />
    </div>
  </div>
</template>

<script>
import Day from "@/components/Day.vue";
import { mapGetters } from "vuex";
export default {
    data(){
        return {
            showWeek: true
        }
    },
    components: {
        Day
    },
    methods: {
        openClose(){
            this.showWeek = true
        }
    },
    computed: {
        ...mapGetters(['getDailyWeather'])
    }
}
</script>

<style lang="scss">
.main__week{
    &-btns{
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
    }
    &-btn{
        border-radius: 5px;
        box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
        background: rgba(255, 255, 255, 1);
        padding: 7px 20.5px;
        color: rgba(0, 0, 0, 1);
        font-size: 18px;
        line-height: 22px;
        &.active{
            background: rgba(71, 147, 255, 1);
            color: rgba(255, 255, 255, 1);
        }   
    }
    &-days{
        border-radius: 0px 0px 20px 20px;
        box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
        background: rgba(255, 255, 255, 1);
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 20px;
        padding: 20px;
    }
}


</style>