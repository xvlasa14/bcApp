import Diagnosis from "../models/diagnosis";
import Exam from "../models/exam";
import Therapy from "../models/therapy";
import User from "../models/user";

export default interface IPatient {
    id: number;
    gender: string;
    education: string;
    birth_date: string;
    admission_date: string;
    physician: User;
    therapy: Array<Therapy>;
    exams: Array<Exam>;
    diagnoses: Array<Diagnosis>;
}