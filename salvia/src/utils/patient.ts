async function getAllPatients() {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/patients", {
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
	});

	return reply.json();
}

async function getPatientById(id: number) {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/patients/" + id, {
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
	});

	return reply.json();
}

async function createPatient(patient: Object) {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/patients", {
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
		body: JSON.stringify(patient),
	});

	return reply.json();
}

async function updatePatient(id: number, info: Object) {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/patients/" + id, {
		method: "PATCH",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
		body: JSON.stringify(info),
	});

	return reply.json();
}

async function deletePatient(id: number) {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/patients/" + id, {
		method: "PATCH",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
	});

	return reply.json();
}

async function getPatientDiagnoses() {}

async function getPatientTherapy() {}

async function getPatientExams() {}

export {
	getAllPatients,
	getPatientById,
	createPatient,
	updatePatient,
	deletePatient,
	getPatientDiagnoses,
	getPatientExams,
	getPatientTherapy,
};
