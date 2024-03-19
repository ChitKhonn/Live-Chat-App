<template>
  <div class="welcome container">

    <div v-if="showLoginForm">

      <Login></Login>
      <p>Not a member? <span @click="showLoginForm=!showLoginForm">Create account</span></p>

    </div>
    <div v-else>

      <SignUp></SignUp>
      <p>Already member? <span @click="showLoginForm=!showLoginForm" >Login account?</span></p>

    </div>


  </div>
</template>

<script>
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import {ref} from "vue";

export  default  {
  components: {Login, SignUp},

  setup(){
    let showLoginForm = ref(true);

    return {showLoginForm};
  }

}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
/* .welcome label {
  display: block;
  margin: 20px 0 10px;
} */
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>