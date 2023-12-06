<script setup lang="ts">
import { ref } from "vue";
import { loginUser, authUser } from "../../utils/user";
const username = ref("");
const password = ref("");
</script>

<template>
	<h2>login page</h2>
	<section>
		<input v-model="username" placeholder="username" />
		<input v-model="password" placeholder="password" />
		<button @click="loginUser(username, password)">login</button>
	</section>

	<section>
		<button @click="authUser()">AUTH ME</button>
	</section>
</template>
