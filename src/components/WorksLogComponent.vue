<template>
  <div class="w-113 min-h-[350px] border border-grey2 m-auto mt-5 items-center">
    <div class="w-full text-left">
      <p class="font-bold text-xl text-blue1 ml-5 mt-5">Work logs</p>
    </div>
    <div class="w-full flex" >
           <DayComponent @deleteTimeID="delTimeId" @addInput="addInput" v-for="(group, category) in getUserWorkDay" :key="category"  :group="group" :workDay="category"/>
    </div>
  </div>
</template>

<script>

import DayComponent from "@/components/DayComponent.vue";
import {mapGetters} from "vuex";

export default {
  name: "WorksLogComponent",
  components: {DayComponent},
  data() {
    return {

    };
  },
  computed:{
    ...mapGetters('user', ['getUserWorkDay']),
  },

  methods: {

    addInput (payload){

      this.$store.dispatch("user/addWorkDay",payload);
    },
    delTimeId (payload){

      this.$store.dispatch("user/deleteWorkDay",payload);
    }

  }
};
</script>
<style scoped>

</style>
