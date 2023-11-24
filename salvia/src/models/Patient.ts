interface Patient {
    id: number;
    doctorID: number;

    code: string;
    gender: string;
    education: string;
    birthyear: string;
    admission: Date;

    exams: Array<Exam>;
}