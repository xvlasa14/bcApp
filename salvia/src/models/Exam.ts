interface Exam {
    id: number;
    patientID: number;
    doctorID: number;
    description: string;
    date: Date;
    tests: Array<Test>;
}