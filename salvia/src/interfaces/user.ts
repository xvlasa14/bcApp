export default interface IUser {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    isActive: boolean;
    role_id: string;
    email: string;
    patients: Array<Patient>;
}