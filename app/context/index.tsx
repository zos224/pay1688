import React, { createContext, useState } from "react";
import { TypeReState } from "./type";
import { useRouter } from "next/router";
import { typeUser } from "@/api/type/auth";

export const reState: TypeReState = createContext({
  setUser: () => {},
});

function ContextProvider({ children }: any) {
  //Router
  const route = useRouter();

  const [user, setUser] = useState<typeUser | null>(null);

  return (
    <>
      <reState.Provider
        value={{
          route,
          user,
          setUser: (arg: any) => setUser(arg),
        }}
      >
        {children}
      </reState.Provider>
    </>
  );
}

export default ContextProvider;
