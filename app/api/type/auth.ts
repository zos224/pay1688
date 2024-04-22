export type typeLoginAdmin = {
    account: string;
    password: string;
};
export enum Gender {
    male = 1,
    female = 2,
}

export enum RoleUser {
    admin = 1,
    partner = 2,
}

export enum StatusUser {
    normal = "normal",
    remove = "remove",
}

export interface typeUser {
    id: String;
    fullName: String;
    avatar: String;
    address: String;
    sex: 0 | 1;
    role: "admin" | "partner";
    birthday: String;
    status: "normal" | "remove";
}
