<template>
    <h2>patient profile</h2>

    <form @submit.prevent="submitForm">
        <input v-model="gender" type="text" placeholder="gender" />
        <input v-model="education" type="text" placeholder="education" /><br/>
        <input v-model="birthdate" type="text" placeholder="birthdate" />
        <input v-model="admissiondate" type="text" placeholder="admission date" /><br/>
        <input v-model="code" type="email" placeholder="code" /><br/>
        <input class="submit" type="submit" value="Submit"/><br/>
    </form>
    <div>
        <p>gender: {{ gender }}</p>
        <p>education: {{ education }}</p>
        <p>birthdate: {{  birthdate }}</p>
        <p>admission date: {{ admissiondate }}</p>
        <p>code: {{ code }}</p>
        <p>data: {{ data }}</p>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      gender: "",
      education: "",
      birthdate: "",
      admissiondate: "",
      code: "",
      data: "",
    };
  },
  methods: {
    submitForm: async function () {
        this.data = JSON.stringify({
           gender: this.gender,
           education: this.education,
           birthdate: this.birthdate,
           admissiondate: this.admissiondate,
           code: this.code,
        });

        const reply = await fetch('http://localhost:52000/patients', {
          method: 'POST',
          body: this.data,
          mode: 'no-cors',
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        });

        console.log(reply);
    }
  }
};
</script>