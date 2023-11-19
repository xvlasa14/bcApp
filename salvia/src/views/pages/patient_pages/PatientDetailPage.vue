<template>
    <h2>Patient Detail, ID: {{ patient_id }}</h2>
    <p>Code: {{ code }}</p>

    <p>Gender: {{ gender }}</p>
    <p>Premorbid education: {{ premorbid_education }}</p>
    <p>Birth date: {{ birth_date }}</p>
    <p>Admission date: {{ admission_date }}</p>
    <p>Creation time: {{ creation_time }}</p>
    <p>Update time: {{ update_time }}</p>
    <p>Assigned physician: {{ physician_name }} {{ physician_surname }}</p>
    <p>Rehabilitations: {{ rehabilitations }}</p>

    <p>Full response: <em>{{ response }}</em></p>
</template>


<script lang="ts">
export default {
    data() {
        return {
            code: null,
            gender: null,
            premorbid_education: null,
            birth_date: null,
            admission_date: null,
            creation_time: null,
            update_time: null,
            physician_name: null,
            physician_surname: null,
            rehabilitations: null,
            response: "",
        };
    },
    mounted() {
        this.load_patient_data();
    },
    props: {
        patient_id: {
            type: String,
            required: true
        }
    },
    methods: {
        load_patient_data: async function () {

            const reply = await fetch(`http://localhost:8000/patients/${this.patient_id}`, {
                method: "GET",
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            const json = await reply.json();
            this.code = json["code"];
            this.gender = json["gender"];
            this.premorbid_education = json["premorbid_education"];
            this.birth_date = json["birth_date"];
            this.admission_date = json["admission_date"];
            this.creation_time = json["creation_time"];
            this.update_time = json["update_time"];
            this.physician_name = json["assigned_physician"]["first_name"];
            this.physician_surname = json["assigned_physician"]["last_name"];
            this.rehabilitations = json["rehabilitations"];

            // lentgh of rehabilitations


            this.response = JSON.stringify(json);


            console.log(reply);

        }
    }
};
</script>
