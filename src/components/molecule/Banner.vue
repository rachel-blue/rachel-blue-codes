<template>
  <div>
    <img
      class="m-banner_pic"
      alt="Ray Blue"
      src="../../assets/RayBlue.jpg"
    />

    <div class="m-banner_icons">
      <div><font-awesome-icon :icon="github" class="fa-5x"/></div>
      <div><font-awesome-icon :icon="linkedin" class="fa-5x"/></div>
      <div><font-awesome-icon :icon="twitter" class="fa-5x"/></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Banner',
  props: {},
  data () {
    return {
      github: faGithubSquare,
      linkedin: faLinkedin,
      twitter: faTwitterSquare,
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.m-banner {
  &_pic {
    width: 100%;
    height: auto;
  }

  &_icons {
    padding-left: 60px;
  }
}
</style>
