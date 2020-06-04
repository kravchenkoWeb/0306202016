<template>
  <div class="comments-wrapper">
      <transition-group name="fade">
          <div class="comment" v-for="comment in commentsArr" :key="comment.commentText">
            <div class="commentator">
                <b>{{comment.author}}</b>
                <span>{{comment.date}}</span>
            </div>
            <div class="comment-text">
                <div class="triangle-outer">
                    <div class="triangle-inner"></div>
                </div>
                {{comment.commentText}}
            </div>
        </div>
      </transition-group>
      

  </div>
</template>

<script>

export default {
  props: {
      commentsArr: {
          type: Array
      }
  }
}
</script>

<style lang="sass" scoped>

    .comments-wrapper
        margin-top: 8px
    
    .comment
        margin-bottom: 16px
        .commentator
            margin-bottom: 9px
            b
                font-size: 14px
                display: inline-block
                margin-right: 10px
                line-height: 19px
            span
                font-size: 11px
                line-height: 19px
                color: #808080 
        .comment-text
            padding: 16px 15px 15px 20px
            background-color: #F2FBFF
            border: 1px solid #C4CBCF
            position: relative
            box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1)
            font-size: 14px
            line-height: 19px
            position: relative
            &::before
                content: ''
                width: 0
                height: 0
                border-bottom: 10px solid #F2FBFF
                border-right: 10px solid transparent
                position: absolute
                top: -9px
                left: 20px
                z-index: 999
            &::after
                content: ''
                width: 0
                height: 0
                border-bottom: 12px solid #C4CBCF
                border-right: 12px solid transparent
                position: absolute
                top: -12px
                left: 19px
                z-index: 998    
    
    .fade-enter
        transform: translateY(100%)
        opacity: 0
    .fade-enter-active
        transition: all .7s ease
        transform: translateY(0)


</style>
