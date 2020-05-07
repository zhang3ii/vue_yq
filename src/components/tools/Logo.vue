<template>
  <div class="logo">
      <LogoSvg alt="logo" />
      <h1 v-if="showTitle">{{ title }}</h1>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: 'SDP-Admin',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
