import User from "../models/user";

export default interface IExam {
	id: number;
	date: Date;
	description: string;
	physican: User;
}
