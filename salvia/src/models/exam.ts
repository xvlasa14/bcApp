import IExam from "../interfaces/exam";
import User from "./user";

export default class Exam implements IExam {
	id: number;
	date: Date;
	description: string;
	physican: User;

	constructor(id: number, date: Date, description: string, physican: User) {
		this.id = id;
		this.date = date;
		this.description = description;
		this.physican = physican;
	}
}
