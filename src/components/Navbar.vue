<script >
import {auth} from "@/firebase/config";
import {ref} from "vue";
import getUser from "@/composables/getUser";

export default {
  setup() {
    let error = ref(null);
    let {user} = getUser();
    let logout=async () => {
      try {
        await auth.signOut();
        console.log("success logout")
      }catch (e){
        error.value = e.message;
      }
    }

    return {logout,user};
  }
}

</script>

<template>
  <nav v-if="user">
    <div>
      <p>Hi {{user.displayName}} </p>
      <p class="email">logged in as {{user.email}} </p>
    </div>
    <div>
      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>