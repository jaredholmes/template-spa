<template>
  <div id="app">
    <navbar/>
    <img src="./assets/logo.png">
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/ui/Navbar'
import VFooter from '@/components/ui/VFooter'

export default {
  name: 'App',
  components: {
    Navbar,
    VFooter
  },
  methods: {
    setTitle (metaTitle) {
      const titleSuffix = 'Website'
      document.title = metaTitle ? metaTitle + ' | ' + titleSuffix : titleSuffix
    }
  },
  watch: {
    $route (to, from) {
      const description = 'Website description.'
      this.setTitle(to.meta.title)
      document.getElementsByTagName('meta')['description'].content = to.meta.description || description
      window.scrollTo(0, 0)
    }
  },
  beforeMount () {
    this.setTitle(this.$route.meta.title)
  }
}
</script>
