<template>
  <nav class="navbar">
    <div class="navbar-heading">
      <router-link to="/">
        <h1>Template</h1>
      </router-link>
    </div>
    <div
      class="navbar-nav flex"
      :class="{ 'shown': navShown }"
    >
      <div
        @click="closeNav"
        class="navbar-nav-close text-align-right"
      >
      <icon class="svg-icon">
        <!-- Icon Close -->
      </icon>
      </div>
      <router-link
        v-for="(route, i) in $navRoutes"
        :key="i"
        :to="route.path"
        class="nav-link"
        @click.native="closeNav"
      >
        {{ route.name }}
      </router-link>
    </div>
    <div
      @click="showNav"
      class="navbar-nav-toggle"
    >
      <icon class="svg-icon">
        <!-- Icon Menu -->
      </icon>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navShown: false
    }
  },
  methods: {
    showNav () {
      this.navShown = true
    },
    closeNav () {
      this.navShown = false
    }
  },
  beforeMount () {
    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth >= 768) {
          this.closeNav()
        }
      }
    )
  }
}
</script>
