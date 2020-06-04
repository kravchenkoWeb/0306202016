<template>
  <div id="app">
    <div class="profile-wrapper">
      <div class="container">
        <app-user-profile></app-user-profile>
        <app-nav></app-nav>
        <app-comments :commentsArr="comments"></app-comments>
      </div>
    </div>
    <div class="add-comment">
      <div class="container">
        <textarea @keyup.ctrl.enter="addComment" rows="10" v-model="formVal"></textarea>
        <button @click="addComment" :disabled="!formVal" :class="!formVal ? 'disabled' : ''">Написать консультанту</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile';
import Nav from './components/Nav';
import Comments from './components/Comments';

var moment = require('moment');

export default {
  name: 'app',
  data () {
    return {
      formVal: '',
      isFilled: false,
      comments: [
              {
                  author: 'Самуил',
                  date: '13 октября 2011',
                  commentText: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
              },
              {
                  author: 'Лилия Семёновна',
                  date: '14 октября 2011',
                  commentText: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
              },
              {
                  author: 'Лилия Семёновна',
                  date: '14 октября 2011',
                  commentText: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
              },
          ]
    }
  },
  methods: {
    addComment() {
      if(this.formVal) {
        
          this.comments.push({
          author: 'Анонимный Комментатор',
          date: moment().lang("ru").format('LL', 'ru'),
          commentText: this.formVal
        
        });

        this.formVal = '';

      } 
      // console.log(moment().format('LL'));
    }
  },
  components: {
    AppUserProfile: UserProfile,
    AppNav: Nav,
    AppComments: Comments
  }
}
</script>

<style lang="sass">
  body
    font-family: Arial, Helvetica, sans-serif
    font-size: 16px
    line-height: 1.6
    color: #333333
    margin: 0

  .profile-wrapper
    padding: 0 20px  

  .container
    width: 100%
    max-width: 768px
    margin: 0 auto 

  .flex-row
    display: flex
    flex-direction: row  
    
  .add-comment
    background-color: #F2F2F2
    padding: 28px 20px 34px 20px  
    textarea
      width: 100%
      height: 63px
      border-radius: 1px
      border: 1px solid #000000
      padding: 10px 0
      text-indent: 20px
      resize: none
      margin-bottom: 23px

    button
      width: 100%
      max-width: 281px
      height: 43px
      color: #333333
      background-color: #FDD639
      font-weight: 700
      font-size: 16px
      border-radius: 23px
      border: none
      outline: none
      display: block
      margin: 0 auto
      cursor: pointer
      transition: all .8s ease
      &:hover
        background-color: #e8c32e
      &.disabled
        opacity: .7  
        cursor: default

</style>
