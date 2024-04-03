<script>
import  Navbar from '../components/Navbar.vue'
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {watch} from "vue";

export  default {
  components: {Navbar},
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
  </div>
</template>

<style>

</style>