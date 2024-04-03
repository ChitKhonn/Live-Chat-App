<script>
import {ref} from "vue";
import getUser from "@/composables/getUser";
import {timestamp} from "@/firebase/config";

export  default {
  setup() {
    let message = ref("");
    let {user} = getUser();
    let handleSubmit = ()=> {
      let chart = {
        message:message.value,
        name:user.value.displayName,
        created_at:timestamp()
      }

      message.value = ""
    }
    return {message,handleSubmit};
  }
}
</script>

<template>
  <form action="">
    <textarea placeholder="text message and click enter to send" v-model="message" @keypress.enter="handleSubmit"></textarea>
  </form>
</template>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}

</style>