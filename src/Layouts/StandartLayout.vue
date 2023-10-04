<template>
  <HeaderComponent />
  <slot />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: 'StandartLayout',
  components: {
    HeaderComponent,
  }
}
</script>