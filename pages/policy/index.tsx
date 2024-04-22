import Header from "@/components/layouts/header";
import Policy from "@/screens/policy";
import { NextPage } from "next";
import React from "react";
import MetaPage from "../Meta";
import api from "@/api/graphql";

const Page: NextPage = ({ data, meta, logo }: any) => {
  return (
    <React.Fragment>
      <MetaPage {...meta} />
      <Header logo={logo} />
      <Policy />
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  try {
    const funcCallNewFeed = async () => {
      const { data } = await api.apiGetSetting({});
      return data?.data?.content?.home;
    };
    const data = await funcCallNewFeed();

    return {
      props: {
        data: data,
        meta: {
          name: "Chính sách",
          description: data?.homeDescription || "",
          faviconIcon: data?.favicon ? data?.favicon : null,
        },
        logo: data?.logoWebsite ? data?.logoWebsite : null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
}

export default Page;
