async function GetAllDiagnoses() {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/diagnoses", {
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
	});

	return reply.json();
}

async function getDiagnosisById(id: number) {
	const reply = await fetch(import.meta.env.VITE_DB_URL + "/diagnoses/" + id, {
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-type": "application/json",
			Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
		},
	});

	return reply.json();
}

// ADMIN ONLY
async function createDiagnosis() {}

async function updateDiagnosis() {}

async function deleteDiagnosis() {}

export {
	GetAllDiagnoses,
	getDiagnosisById,
	createDiagnosis,
	updateDiagnosis,
	deleteDiagnosis,
};
