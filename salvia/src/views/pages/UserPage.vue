<template>
	<h2>user page</h2>
	<section>
		<h3>Create</h3>
		<div><input v-model="username" placeholder="username" /></div>
		<div><input v-model="password" placeholder="password" /></div>
		<div><input v-model="first_name" placeholder="firstname" /></div>
		<div><input v-model="last_name" placeholder="lastname" /></div>
		<div><input v-model="email" placeholder="email" /></div>
		<div><input v-model="role_id" placeholder="role" /></div>
		<button @click="create()">create</button>

		<div>
			{{ response }}
		</div>
	</section>
	<section>
		<h3>List by ID</h3>
		<input v-model="id" placeholder="id" />
		<button @click="listById(id)">find</button>
		<div>{{ oneUser }}</div>
	</section>
	<section>
		<h3>List All</h3>
		<button @click="listAll()">list all</button>
		<div v-for="user in users">
			{{ user }}
		</div>
	</section>
	<section>
		<h3>Delete by ID</h3>
		<input v-model="id" placeholder="id" />
		<button @click="deleteById(id)">delete</button>
		<div>{{ deleteResult }}</div>
	</section>
</template>

<script lang="ts">
import User from "../../models/user";
import { createUser, deleteUser, getUser, getUsers } from "../../utils/user";

export default {
	data() {
		return {
			id: -1,
			username: '',
			password: '',
			first_name: '',
			last_name: '',
			email: '',
			role_id: '',
			response: {},
			users: {},
			oneUser: {},
			deleteResult: {}
		}
	},
	methods: {
		async create() {
			let reply = await createUser(this.username, this.email, this.password, this.first_name, this.last_name, this.role_id);

			let u = new User(await reply.id, await reply.username, await reply.first_name, await reply.last_name, await reply.isActive, await reply.role_id, await reply.email, await reply.patients);

			this.response = u;
		},
		async update() { },
		async deleteById(id: number) {
			this.deleteResult = (await deleteUser(id)).status;
		},
		async listAll() {
			this.users = await getUsers();
		},
		async listById(id: number) {
			this.oneUser = await getUser(id);
		},
	}
}
</script>