<template>
  <div class="nav">
      <div class="flex-row">
          <div class="reviews">
              <b>Последние отзывы</b>
              <a href="#">Все отзывы</a>
          </div>
          <div class="activiti">
              <div class="activiti_item">
                  <img src="../assets/like.svg" alt="Likes">
                  <span class="number">131</span>
              </div>
              <div class="activiti_item">
                  <img src="../assets/comment.svg" alt="Comments">
                  <span class="number">14</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="sass" scoped>
    .flex-row
        margin-top: 20px

    .reviews
        width: 70%

    .reviews
        b
            font-size: 16px
            line-height: 16px
            display: inline-block
            margin-right: 10px  
        a
            font-size: 14px
            color: #005DA1
            line-height: 16px
            font-weight: 400 

    .activiti
        text-align: right
        margin-right: 9%  
        width: 30% 
        .activiti_item
            display: inline-block
            margin-right: 18px
            img
                position: relative
                top: 2px
                width: 12px
                height: auto 
            .number
                font-size: 12px

    @media screen and (max-width: 410px)
        .flex-row
            flex-direction: column
        .reviews, .activiti
            width: 100%
            text-align: center  
        .activiti
            margin-right: 0
            .activiti_item
                margin: 10px 10px     


</style>
