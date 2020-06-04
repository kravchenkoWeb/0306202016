<template>
  <div id="user-profile">
    <div class="user-profile-data">
      <div class="user-avatar">
        <img src="../assets/user-profile.png" :alt="userName">
      </div>
      <div class="user-data">
        <h1 class="user-name">{{userName}}</h1>
        <h2 class="user-duty">{{userDuty}}</h2>
        <div class="user-description">
          <p>{{userDescription}}</p>
        </div>
      </div>
    </div>
    <div class="user-profile-data services">
      <div class="services-wrapper">
        <h3>Услуг</h3>
        <hr>
        <div class="services-list">
          <div class="dark-line"></div>
          <app-service v-for="serviceItem in services" :key="serviceItem.name" :serviceItem="serviceItem"></app-service>
        </div>
        <hr>
        <div class="flex-row">
          <div class="left">
            <b>Всего</b>
          </div>
          <div class="right">
            <b>{{serviceCount}}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Service from './Service'

export default {
  data () {
    return {
      userName: 'Вероника Ростова',
      userDuty: 'Менеджер по продажам',
      userDescription: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
      services: [
        {
          number: 11,
          name: 'Ручное бронирование'
        },
        {
          number: 3,
          name: 'Пакетные туры'
        },
        {
          number: 1,
          name: 'Отели'
        },
      ]
    }
  },
  computed: {
    serviceCount() {
      let summ = 0;
      this.services.forEach(element => {
        summ += element.number;
      });
      return summ;
    }
  },
  components: {
    AppService: Service
  }
}
</script>

<style lang="sass" scoped>
  .user-profile-data
    display: flex
    flex-direction: row
    justify-content: center
    padding-top: 15px
    &.services
      padding-top: 0
      justify-content: flex-end

  .user-avatar
    width: 100%
    height: 100%
    max-width: 124px
    max-height: 124px
    position: relative
    z-index: 999
    img
      border-radius: 50%

  .user-data
    text-align: left  
    margin-left: 10px
    width: 100%
    h1.user-name
      font-weight: 700
      font-size: 16px
      color: #333
      margin: 7px 0 2px 0     
      line-height: 20px 
    h2.user-duty
      font-size: 12px
      line-height: 20px
      color: #808080
      margin: 0 0 5px 0
      font-weight: 400
    .user-description
      width: 87%
      background-color: #FFFBC8
      border: 1px solid #DADADA
      border-radius: 5px
      padding: 10px 10px 10px 50px
      position: relative
      left: -51px
      p
        margin: 0
        font-size: 14px
        line-height: 20px
  .services-wrapper 
    width: 100%
    max-width: 318px    
    margin-right: 9% 
    h3
      font-weight: 400
      font-size: 13px
      line-height: 15px 
      margin: 0 33px 7px 0  
      text-align: right 
    hr
      background-color: transparent
      height: 0  
      border: 1px solid #DADADA
      margin-bottom: 15px

  .services-list
    position: relative
    .dark-line
      width: 1px
      height: 100%
      position: absolute
      top: 0
      left: 0

  .flex-row
    .left b, .right b
      font-size: 16px
      line-height: 26px
    .left, .right
      width: 50%
    .right
      text-align: right
      padding-right: 12%    

  @media screen and (max-width: 580px)
    .services-wrapper
      margin-right: 8%
      margin-top: 13px

  @media screen and (max-width: 483px)
    .services-wrapper
      margin-right: 7%
      margin-top: 13px

</style>
