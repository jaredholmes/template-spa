<template>
  <div class="page-header container c-primary">
    <div><!--div for aligned bottom border--></div>
    <h1>
      <slot name="heading"/>
    </h1>
    <p>
      <slot
        v-if="$slots.subheading"
        name="subheading"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>
