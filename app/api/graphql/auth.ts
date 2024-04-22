
import { gql } from "@apollo/client";
import client from "../axios/apollo-client";
import { getCookie } from "cookies-next";
import { DEFAULT_VARIABLE_COOKIES } from "@/utils/common";
import { resultResponsive } from ".";

type typeProps = {
  account: string
  password?: string
}

export const login = async (props: typeProps) => {
  const data: any = await client.mutate({
    mutation: gql`
    mutation Login($account: String, $password: String) {
      login(account: $account, password: $password) {
        data {
          id
          fullName
          avatar
          address
          sex
          role
          birthday
          status
        }
        status {
          code
          mess
          size
          total
          page
          html
          timeRequest
          token
          refreshToken
          graphql
        }
      }
    }
    `,
    variables: { ...props },
    context: {
      headers: {
        Authorization: getCookie(DEFAULT_VARIABLE_COOKIES.token) || "",
      }
    }
  });

  return resultResponsive(data, "login")
}
