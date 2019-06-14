<template>
  <footer class="footer bc-secondary">
    <div class="container flex justify-between">
      <h3>Template</h3>
      <div class="footer-nav text-align-right">
        <router-link
        v-for="(route, i) in $navRoutes"
        :key="i"
        :to="route.path"
        class="footer-nav-item"
        >
          {{ route.name }}
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'VFooter'
}
</script>
