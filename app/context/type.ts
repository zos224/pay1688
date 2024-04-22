import { typeUser } from "@/api/type/auth";
import { NextRouter } from "next/router";
import { Context } from "react";

export type TypeReState = Context<{
    route?: NextRouter;
    setUser: (arg?: typeUser) => void;
    user?: typeUser | null;
    [key: string]: any;
}>;
