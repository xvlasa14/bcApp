<template>
    <h2>user profile</h2>

    <form @submit.prevent="submitForm">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="firstName" type="text" placeholder="firstName" /><br/>
        <input v-model="lastName" type="text" placeholder="lastName" />
        <input v-model="role" type="text" placeholder="role" /><br/>
        <input v-model="email" type="email" placeholder="email" />
        <input v-model="password" type="password" placeholder="password" /><br/>

        <input class="submit" type="submit" value="Submit"/><br/>
    </form>
    <div>
        <p>username: {{ username }}</p>
        <p>firstName: {{ firstName }}</p>
        <p>lastName: {{  lastName }}</p>
        <p>role: {{ role }}</p>
        <p>email: {{ email }}</p>
        <p>data: {{ data }}</p>
    </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      username: "",
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      password: "",
      data: ""
    };
  },
  methods: {
    submitForm: async function () {
        this.data = JSON.stringify({
            username: this.username, 
            firstName: this.firstName,  
            lastName: this.lastName, 
            role: this.role, 
            email: this.email,
            password: this.password                     
        });

        const reply = await fetch('http://localhost:52000/users', {
          method: 'POST',
          mode: 'no-cors',
          body: this.data,
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        });

        console.log(reply);
    }
  }
};
</script>