import { typeLoginAdmin } from "@/api/type/auth";
import { typeHomePage, typeServicePage, typeSettings } from "@/api/type/settings";

export type typeGetUser = {
    token?: string
}

export type handleAuth = {
    login: (req: typeLoginAdmin) => any;
    getUser: (req: typeGetUser) => any;
}



export interface typeHandleSettings {
    createHome: (req: typeHomePage, values?: typeSettings) => any
    createService: (req: typeServicePage, values?: typeSettings) => any
    getSetting: () => Promise<any>;

}