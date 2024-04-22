

import { DEFAULT_VARIABLE_COOKIES } from "@/utils/common";
import { gql } from "@apollo/client";
import { getCookie } from "cookies-next";
import { resultResponsive } from ".";
import client from "../axios/apollo-client";

type typeProps = {
  token?: string
}

export const getUser = async (props: typeProps) => {
  const data: any = await client.query({
    query: gql`query Data {
          getUser {
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
        Authorization: props.token || getCookie(DEFAULT_VARIABLE_COOKIES.token) || "",
      }
    }
  });

  return resultResponsive(data, "getUser")
}
