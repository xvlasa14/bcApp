import IPatient from "../interfaces/patient";
import Diagnosis from "./diagnosis";
import Exam from "./exam";
import Therapy from "./therapy";
import User from "./user";

export default class Patient implements IPatient {
	id: number;
	gender: string;
	education: string;
	birth_date: string;
	admission_date: string;
	physician: User;
	therapy: Array<Therapy> = [];
	exams: Array<Exam> = [];
	diagnoses: Array<Diagnosis> = [];

	constructor(
		id: number,
		gender: string,
		education: string,
		birth_date: string,
		admission_date: string,
		physician: User,
		therapy?: Array<Therapy>,
		exams?: Array<Exam>,
		diagnoses?: Array<Diagnosis>
	) {
		this.id = id;
		this.gender = gender;
		this.education = education;
		this.birth_date = birth_date;
		this.admission_date = admission_date;
		this.physician = physician;
		if (therapy) {
			therapy.forEach((t) => {
				this.therapy.push(t);
			});
		}

		if (exams) {
			exams.forEach((e) => {
				this.exams.push(e);
			});
		}
		if (diagnoses) {
			diagnoses.forEach((d) => {
				this.diagnoses.push(d);
			});
		}
	}
}
