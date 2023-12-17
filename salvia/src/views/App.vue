<template id="app">
  <p>Logged user: {{ logged_user }}</p>
  <h1>ROUTING temp</h1>
  <p>
    <router-link to="/">HOME</router-link> //
    <router-link to="/login">LOGIN</router-link> //
    <router-link to="/user">USER profile</router-link> //
    <router-link to="/patient">PATIENT profile</router-link> //
    <router-link to="/tests">TESTs overview</router-link>
  </p>
  <p>=======================================================</p>
  <router-view></router-view>
</template>


<script lang="ts">
import { authUser } from "../utils/user";

export default {
  data() {
    return {
      logged_user: "",
    };
  },
  async mounted() {
    const response = await authUser();
    if (response.ok) {
      const json = await response.json();
      this.logged_user = json["username"];
    } else {
      this.logged_user = "not logged in";
    }
  },
}

</script>
