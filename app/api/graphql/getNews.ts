
import { gql } from "@apollo/client";
import client from "../axios/apollo-client";
import { getCookie } from "cookies-next";
import { DEFAULT_VARIABLE_COOKIES } from "@/utils/common";
import { resultResponsive } from ".";

type typeProps = {
}

export const getNews = async (props: any) => {
  const data: any = await client.query({
    query: gql`query GetNews($page: Int, $size: Int, $getNewsId: ID, $type: Int) {
            getNews(page: $page, size: $size, id: $getNewsId, type: $type) {
              data {
                id
                content
                title
                description
                image
                type
                metaTitle
                metaKeywords
                metaDescription
                status
                createdAt
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

  return resultResponsive(data, "getNews")
}
