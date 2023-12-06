import IUser from "../interfaces/user";

export default class User implements IUser {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    isActive: boolean = false;
    role_id: string;
    email: string;
    patients: Array<Patient> = [];

    constructor(id: number, username: string, first_name: string, last_name: string, isActive: boolean, role_id: string, email: string, patients: Array<Patient>) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.isActive = isActive;
        this.email = email;
        this.role_id = role_id;
        if (patients) {
            this.patients.push(patients);
        }
    }
}