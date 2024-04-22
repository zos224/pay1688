
import { gql } from "@apollo/client";
import client from "../axios/apollo-client";
import { getCookie } from "cookies-next";
import { DEFAULT_VARIABLE_COOKIES } from "@/utils/common";
import { resultResponsive } from ".";

type typeProps = {
    content: any
    status?: string
}

export const createNew = async (props: any) => {
    const data: any = await client.mutate({
        mutation: gql`mutation CreateNew(
        $content: String!
        $title: String!
        $image: String!
        $description: String
        $type: Int
        $metaTitle: String
        $metaKeyword: String
        $metaDescription: String
        $status: String
      ) {
        createNew(
          content: $content
          title: $title
          image: $image
          description: $description
          type: $type
          metaTitle: $metaTitle
          metaKeyword: $metaKeyword
          metaDescription: $metaDescription
          status: $status
        ) {
          data
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

    return resultResponsive(data, "createNew")
}
