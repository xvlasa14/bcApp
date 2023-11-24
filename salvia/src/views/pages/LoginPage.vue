<template>
  <form @submit.prevent="submitForm">
    <input v-model="username" type="text" placeholder="username" />
    <input v-model="password" type="password" placeholder="password" />
    <input class="submit" type="submit" value="Submit"/>
  </form>

  <p>token: {{ token }}</p>
  <p> data: {{ data }}</p>
</template>

<script lang="ts">
import formurlencoded from 'form-urlencoded';
export default {
  data() {
    return {
      username: "",
      password: "",
      token: "null",
      data: {}
    };
  },
  methods: {
    submitForm: async function () {
      console.table({ username: this.username, password: this.password});
      this.data = {"username": this.username, "password": this.password}

      const reply = await fetch('http://localhost:52000/auth/token', {
        method: "POST",
        mode: 'no-cors',
        body: formurlencoded(this.data),
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded'},
      });

      console.log(reply);
    }
  },
};
</script>