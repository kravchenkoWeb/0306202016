<template>
  <div class="flex-row">
        <div class="bar">
            <div class="progress" :class="serviceItem.number >= 11 ? 'green' : 'blue'" :style="{width: itemWidth}"></div>
            <span class="description">{{serviceItem.name}}</span>
        </div>
        <div class="amount">
            {{serviceItem.number}}
        </div>
    </div>
</template>

<script>

export default {
  props: {
      serviceItem: {
          type: Object
      }
  },
  computed: {
      itemWidth() {
          return (this.serviceItem.number * 100) * 0.11 + '%'
      }
  }
}
</script>

<style lang="sass" scoped>
  .bar
    width: 60%
    height: 24px
    position: relative
    margin-bottom: 2px
    .progress
      position: absolute
      width: 100%
      height: 100%
      border-radius: 0px 3px 3px 0px
      &.green
        background-color: #B1E19B
      &.blue
        background-color: #ACE2F8  
    .description
      position: absolute
      z-index: 999
      width: 100%
      height: 100%
      display: block
      padding-left: 6px
      font-size: 13px
      line-height: 26px  
  
  .amount
    width: 30%
    text-align: right
    padding-right: 12%  
    font-size: 13px
    font-weight: 700
</style>
