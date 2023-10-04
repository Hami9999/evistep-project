<template>
  <div class="w-1/2 grid items-center">

    <div class="w-96 h-28 mt-8 text-left grid m-auto mt-auto">
      <h2 class="font-bold text-2xl text-rega1">Login</h2>
      <ErrorComponent />

      <h4 class="font-normal text-sm tracking-wide text-black mt-5">To finalize your verification, please enter the code that has been sent to your email address / SMS</h4>
      <CodeInput
          class="codeInput"
          @complete="completed = true"
          :fields="6"
          :fieldWidth="56"
          :fieldHeight="56"
          :required="true"
          @change="test"
      />
      <button
          class="bg-grey3 text-white w-28 h-9 rounded tracking-widest	mt-8 ml-auto	font-medium text-sm	"
          :disabled="!completed"
          @click="login"
      >
        Submit
      </button>
    </div>
  </div>

</template>

<script>

import '@/assets/tailwind.css';
import ErrorComponent from "@/components/ErrorComponent.vue";
import CodeInput from "@/components/CodeInput.vue";
import {mapGetters} from "vuex";

export default {
  name: 'LoginStepTwo',
  components: { CodeInput ,ErrorComponent},
  props: {

  },
  data() {
    return {
      code: '',
      completed: false

    }
  },

  computed:{

    ...mapGetters('user', ['getUsersEmail','getUser']),
  },

  methods: {

    async  test(event) {
      if (event.length === 6) {
        await   this.$store.dispatch("user/takeUserCode", event);
      }
    },

  async login(){
        await   this.$store.dispatch("user/getTok",this.getUser);
        await   this.$store.dispatch("user/getRefreshTok");
        await  this.$store.dispatch("user/takeUsers");
        this.$router.push('/user-profile')
   }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
