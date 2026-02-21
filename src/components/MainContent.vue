<template>
  <div class="main__content">
    <div class="main__content-left">
        <p class="main__content-degree">{{ Math.ceil(getFullWeather.current.temp) }}°</p>
        <p class="main__content-today">Сегодня</p>
        <p class="main__content-time">Время: {{ time }}</p>
        <p class="main__content-city">Город: {{ getFullWeather.name }}</p>
        <div class="main__content-img">
            <img src="@/assets/img/sun.svg" alt="" v-if="description == 'ясно'">
            <img src="@/assets/img/small-snow.png" alt="" v-else-if="description == 'небольшой снегопад'">
        </div>
    </div>
    <div class="main__content-right">
        <img src="@/assets/img/cloud-bg.png" alt="" class="main__content-cloud">
        <div class="main__content-items">
            <div class="main__content-item">
                <div class="main__content-icon">
                    <img src="@/assets/img/temp.svg" alt="">
                </div>
                <span>Температура</span>
            </div>
            <div class="main__content-item">
                <div class="main__content-icon">
                    <img src="@/assets/img/pressure.svg" alt="">
                </div>
                <span>Давление</span>
            </div>
            <div class="main__content-item">
                <div class="main__content-icon">
                    <img src="@/assets/img/osadki.svg" alt="">
                </div>
                <span>Осадки</span>
            </div>
            <div class="main__content-item">
                <div class="main__content-icon">
                    <img src="@/assets/img/wind.svg" alt="">
                </div>
                <span>Ветер</span>
            </div>
        </div>
        <div class="main__content-info">
            <p>{{ Math.ceil(getFullWeather.current.temp) }}° - ощущается как {{ Math.ceil(getFullWeather.current.feels_like) }}°</p>
            <p>{{ getFullWeather.current.pressure }} мм ртутного столба - нормальное</p>
            <p>Без осадков</p>
            <p>3 м/с юго-запад - легкий ветер</p>
        </div>
    </div>
  </div>
  
</template>

<script>
import moment from "moment-timezone";
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(['getFullWeather']),
        description(){
            return this.getFullWeather.current.weather[0].description
        },
        time(){
			return moment().tz(this.getFullWeather.timezone).format('HH:mm')
		}
    }
}
</script>

<style lang="scss">
.main__content{
    display: flex;
    justify-content: space-between;
    gap: 32px;
    &-left{
        position: relative;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
        background: rgba(255, 255, 255, 1);
        background: darkcyan;
        max-width: 400px;
        width: 100%;
    }
    &-degree{
        color: rgba(71, 147, 255, 1);
        font-size: 96px;
        font-weight: 500;
        line-height: 117px;
    }
    &-today{
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        line-height: 1;
    }
    &-time{
        color: rgba(147, 156, 176, 1);
        font-size: 25px;
        line-height: 1;
        margin: 31px 0 14px;
    }
    &-city{
        color: rgba(147, 156, 176, 1);
        font-size: 25px;
        line-height: 1;
    }
    &-img{
        position: absolute;
        width: 119px;
        height: 119px;
        top: 46px;
        right: 20px;
        & img {
            width: 100%;
            height: 100%;
        }
    }
    &-right{
        padding: 40px 32px;
        position: relative;
        border-radius: 20px;
        box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
        // background: rgba(255, 255, 255, 0.47);
        background: darkcyan;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    &-cloud{
        position: absolute;
        top: 0;
        right: 0;
    }
    &-info{
        position: relative;
        z-index: 1;
    }
    &-item{
        display: flex;
        align-items: center;
        gap: 20px;
        & span{
            color: rgba(147, 156, 176, 1);
            font-size: 14px;
            line-height: 17px;
        }
    }
    &-icon{
        width: 38px;
        height: 38px;
        box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
        background: rgba(255, 255, 255, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    &-items{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    &-info{ 
        display: flex;
        flex-direction: column;
        gap: 44.7px;
        & p{
            color: rgba(0, 0, 0, 1);
            font-size: 14px;
            line-height: 17px;
        }
    }
}
</style>