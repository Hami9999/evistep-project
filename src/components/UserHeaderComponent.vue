<template>
  <div class="w-16 h-112 bg-blue1 ">
    <img @click="back" class="w-6 h-6 m-auto mt-6 cursor-pointer" src="../assets/menu.png">
    <img @click="dashboard" class="w-6 h-6 m-auto mt-6 cursor-pointer" src="../assets/Schedule.png">
    <img @click="myProfile" class="w-6 h-6 m-auto mt-6 cursor-pointer" src="../assets/Patient.png">
  </div>

</template>

<script>

export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    back() {
      this.$router.push({path: "/user-profile"});
    },
    myProfile() {
      this.$router.push({path: "/user-profile"});
    },
    dashboard() {
      this.$router.push({path: "/user-page"});
    },
  }
};
</script>
<style scoped>

</style>
