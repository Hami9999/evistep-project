<template>

  <div  :class="divClass">
    <div :class="div2Class">
      <p v-if="workDay === '1'" class="text-sm tracking-wider	font-normal	text-greydark  mt-5">Sunday</p>
      <p  v-else-if="workDay === '2'" class="text-sm tracking-wider	font-normal	text-greydark  mt-5">Monday</p>
      <p  v-else-if="workDay === '3'" class="text-sm tracking-wider	font-normal	text-greydark  mt-5">Tuesday</p>
      <p  v-else-if="workDay === '4'" class="text-sm tracking-wider	font-normal	text-greydark  mt-5">Wednesday</p>
      <p  v-else-if="workDay === '5'" class="text-sm tracking-wider	font-normal	text-greydark  mt-5">Thursday</p>
      <p  v-else-if="workDay === '6'" class="text-sm tracking-wider	font-normal	text-greydark  mt-5">Friday</p>
    </div>

    <div class="mt-3" id="myTimes">
      <div class=" border-b border-grey2" v-for="(worktime, index) in group" :key="index">
        <span class="text-grey1 font-normal text-xs">
          <p>start/ end time</p>
        </span>
        <div class="flex" >
          <VueTimePicker id="newTime" v-model="worktime.fromTime"  placeholder="Start" hide-clear-button />
          <span class="mt-1">-</span>
          <VueTimePicker v-model="worktime.toTime"   placeholder="End" hide-clear-button  />
          <span @click="deleteTime([worktime.id,workDay])" ><img  class="  w-4 h-4 mt-2 ml-10" src="../assets/close_24px.png"></span>
          <span><img class="w-4 h-4 mt-2 ml-3" src="../assets/time.png"></span>
        </div>
      </div>

    </div>
    <button @click="addTime(workDay)" class="w-56 h-8 rounded bg-regal mt-5">+</button>
  </div>





</template>

<script>
import '@/assets/tailwind.css';
import VueTimePicker from "vue3-timepicker";
import "vue3-timepicker/dist/VueTimepicker.css";



export default {
  name: 'DayComponent',
  data() {
    return {

    };
  },
  components: {VueTimePicker},
  props:{
    workDay:{
      type: String,
      default: () => {}
    },

    group: {
      type: Array,
      default: () => []
    },
    divClass:{
      type: String,
      default: 'w-56 text-left ml-5 '
    },
    div2Class:{
      type:String,
      default: 'w-52 h-7 border-b border-grey2'
    },
    day:{
      type:String,
      default: 'Sunday'
    }
  },

  computed:{

  },


  created() {},

  methods:{
    changeStartTime(data) {
      this.$store.dispatch("user/changeUsers",data);
    },
    addTime(payload){
      this.$emit('addInput',payload)
    },
    deleteTime(payload){
      this.$emit('deleteTimeID',payload)
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue__time-picker{
width: 60px;

}
.vue__time-picker :deep(input.vue__time-picker-input){
  border: none;
  width: 60px;
}
</style>
