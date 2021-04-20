<template>
  <div>
    <Banner />
    <AboutSection />
    <PortfolioSection />
  </div>
</template>

<script>
import Banner from '../molecule/Banner'
import AboutSection from '../molecule/AboutSection'
import PortfolioSection from '../molecule/PortfolioSection'


export default {
  name: 'PageHome',
  components: {
    Banner,
    AboutSection,
    PortfolioSection,
  }
}
</script>

<style scoped>

</style>
