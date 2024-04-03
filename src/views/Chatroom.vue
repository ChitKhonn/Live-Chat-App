<script>
import  Navbar from '../components/Navbar.vue'
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {watch} from "vue";
import ChatForm from "@/components/ChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export  default {
  components: {ChatWindow, ChatForm, Navbar},
  setup() {
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if (!user.value){
        router.push("/");
      }
    })
  }
}
</script>

<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <ChatForm></ChatForm>
  </div>
</template>

<style>

</style>