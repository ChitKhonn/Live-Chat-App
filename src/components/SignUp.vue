<template>
  <h2>SignUp</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>


<script>
import {ref} from "vue";
import {auth} from "@/firebase/config";
import userSignUp from "@/composables/userSignUp";

export default {
  setup(props,context){
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    // let error = ref(null);

    let {error , createAccount} = userSignUp();

    let signUp = async () => {
      let res = await createAccount(displayName.value,email.value,password.value);
      if (res) {
        context.emit("enterChatroom");
      }
    }

    return {displayName,email,password,signUp,error};
  }
}


</script>


<style scoped>

</style>