<template>
  <div class="flex min-h-[350px]  w-113 border border-grey2 m-auto mt-5 items-center">
    <div class="w-3/4 h-64 border-r border-grey2 ">
      <div class="w-full text-left">
        <p class="font-bold text-xl text-blue1 ml-5">General Info</p>
      </div>

      <div class="w-full flex-wrap flex ">

        <InputComponent label="First Name"
                        :input-value="getUser.firstName"
                        typeKey="firstName"
                        @change="changeInput"/>
        <InputComponent label="Last Name"
                        :input-value="getUser.lastName"
                        typeKey="lastName"
                        @change="changeInput"/>

        <InputComponent label="Date of birth"
                        input-type="date"
                        :input-value="getUser.dateOfBirth"
                        typeKey="dateOfBirth"
                        @change="changeInput"/>

        <InputComponent label="Email"
                        input-div-class="w-109 text-left"
                        input-type="email"
                        :input-value="getUser.email"
                        typeKey="email"
                        @change="changeInput"/>
        <InputComponent label="Personal Email"
                        input-div-class="w-109 text-left"
                        input-type="email"
                        :input-value="getUser.personalEmail"
                        typeKey="personalEmail"
                        @change="changeInput"/>
        <InputComponent  input-div-class="w-109 text-left"
                         input-type="number"
                         :input-value="getUser.mobilePhone"
                         typeKey="mobilePhone"
                         @change="changeInput"
                         input-class="text-black font-normal text-sm t
                                      racking-wider w-56 h-12  border-b border-grey2 outline-none
                                      ml-5 mt-5"/>

        <InputComponent label="Start Date"
                        input-type="date"
                        :input-value="getUser.startDate"
                        typeKey="startDate"
                        @change="changeInput"/>

        <InputComponent
            label="Absences"
            input-div-class="w-32 text-left"
            input-type="number"
            :input-value="getUser.absences"
            typeKey="absences"
            @change="changeInput"
            input-class="
              text-black font-normal text-sm tracking-wider w-28 h-12
              border-b border-grey2 outline-none ml-5"
        />

        <InputComponent
            input-div-class="w-72 text-left flex items-center"
            input-type="checkbox"
            label-second="Core team member"
            input-class=" text-black font-normal text-sm tracking-wider w-6 h-6
                 border-b border-grey2 outline-none ml-5"/>

      </div>
    </div>

    <div class="w-1/4 h-64">
      <div class="w-full text-left">
        <p class="font-bold text-base text-blue1 ml-5">My accounts</p>
      </div>
     <div class="flex w-full">

       <InputComponent label="Slack"
                       img-class="w-5 h-5 rounded  ml-6 mt-1 block"
                       input-placeholder="Enter you slack user name"
                       :input-value="getUser.slackUserName"
                       typeKey="slackUserName"
                       @change="changeInput"
                       input-class="text-black font-normal text-sm tracking-wider
                                   w-56 h-8  border-b border-grey2 outline-none ml-2"/>
     </div>


      <InputComponent label="Github"
                      img-class="w-5 h-5 rounded  ml-6 mt-1 block"
                      input-placeholder="Enter your github user name"
                      :input-value="getUser.gitHubUserName"
                      typeKey="gitHubUserName"
                      @change="changeInput"
                      input-class="text-black font-normal text-sm tracking-wider w-56 h-8  border-b border-grey2 outline-none ml-5 "/>

    </div>
  </div>

</template>

<script>

import InputComponent from "@/components/InputComponent.vue";

export default {
  name: "GeneraInfoComponent",
  components: { InputComponent },

  props: {
    getUser: {
      type: Object,
      default: () => {}
    }
},
  data() {
    return {
    };
  },

  methods: {
    // changeInput(event, key) {
    //   console.log(event, key);
    // }
    changeInput(data) {
      this.$store.dispatch("user/changeUsers",data);
      console.log(data);
    }
  }
};
</script>
<style scoped>

</style>
