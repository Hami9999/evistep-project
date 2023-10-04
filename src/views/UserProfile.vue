<template>
  <div class="w-full  h-112">
      <div class="text-left">
<!--        <p>{{getUser?.name ?? ''}}</p>-->
        <p class="text-2xl text-blue1 font-bold ml-5 mt-5">My Profile</p>
      </div>
        <GeneralInfoComponent  :getUser="getUser"/>
        <WorksLogComponent/>

  </div>
</template>

<script>
import '@/assets/tailwind.css';

import {mapGetters} from 'vuex'
import GeneralInfoComponent from "@/components/GeneralInfoComponent.vue";
import WorksLogComponent from "@/components/WorksLogComponent.vue";

export default {
  name: 'UserProfile',

  components: {WorksLogComponent, GeneralInfoComponent},

  computed:{
    ...mapGetters('user', ['getUser','getUserId']),
  },

  created() {},

  methods:{
  },
 async mounted() {

    if(mapGetters('user', ['getUserId'])){
      this.$store.dispatch("user/takeUserWorkDays");
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
