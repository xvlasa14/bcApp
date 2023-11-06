interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    isActive: boolean;

    patients: Array<Patient>;
}