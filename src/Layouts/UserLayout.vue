<template>
 <UserHeaderComponent/>
  <slot />
</template>

<script>

import UserHeaderComponent from "@/components/UserHeaderComponent.vue";

export default {
  name: 'UserLayout',
  components: {
    UserHeaderComponent,
  }
}
</script>