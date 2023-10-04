<template>
  <div :class="inputDivClass">
    <p :class="labelClass" >{{ label }}</p>
    <div class="w-full flex">
      <img :class="imgClass" src="../assets/logo.png">
      <input v-model="currentValue" :type="inputType" :class="inputClass" @input="changeInput" :placeholder="inputPlaceholder"/>
      <p :class="labelSecondClass">{{labelSecond}}</p>
    </div>

  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "InputComponent",
  components: {},
    props: {
      imgClass:{
        type: String,
        default: 'hidden'
      },
      typeKey: {
        type: String,
        required: true
      },
      inputPlaceholder:{
        type: String,
        default: ' '
      },
      inputDivClass:{
        type: String,
        default: 'w-72 text-left '
      },
      inputClass: {
        type: String,
        default: 'text-black font-normal text-sm tracking-wider w-56 h-12  border-b border-grey2 outline-none ml-5 '

      },
      inputType:{
        type: String,
        default: 'text'
      },
      labelClass: {
        type: String,
        default: 'text-xs tracking-wider\tfont-normal\ttext-grey1 ml-5 mt-5'
      },
      label: {
        type: String,
        default: ''
      },
      labelSecond: {
        type: String,
        default: ''
      },
      labelSecondClass: {
        type: String,
        default: 'text-sm tracking-wider\tfont-normal\ttext-black ml-5'
      },
      inputValue: {
        default: ''
      }

  },
  data() {
    return {
      currentValue: this.inputValue
    };
  },

  computed:{
    ...mapGetters('user',['getUser']),
  },

  methods: {
    ...mapMutations('user', ["setInputLabelName"]),
    // imgUrlFunction(url) {
    //   context.commit('setInputLabelName',url);
    // }
    changeInput() {
      this.$emit('change', { value: this.currentValue, key: this.typeKey })

    }
  },

};
</script>
<style scoped>

</style>
