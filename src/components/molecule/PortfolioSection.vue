<template>
  <div class="bg-dark">
    <ul>
      <li v-for="item in portfolioItems" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { portfolioItems } from './portfolio-items'

export default {
  data: () => {
    return {
      portfolioItems
    }
  },
  name: 'PortfolioSection',
  props: {},
}
</script>

<style scoped>

</style>
