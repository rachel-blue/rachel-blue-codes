<template>
  <div class="bg-primary p-4 m-4">
    <div class="row">
      <div class="col-lg-2 col-sm-12">
        <Banner />
      </div>

      <div class="col-md-12 col-lg-5">
        <AboutSection />
      </div>

      <div class="col-md-12 col-lg-5">
        <PortfolioSection />
      </div>
    </div>
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
