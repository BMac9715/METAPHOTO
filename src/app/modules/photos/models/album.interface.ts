import { User } from "./user.interface";

export interface Album {
    id:    number;
    title: string;
    user:  User;
}
