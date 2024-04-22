import api from "@/api/graphql";
import type { NextPage } from "next";
import React from "react";
import Home from "../app/screens/home";
import MetaPage from "./Meta";
import Header from "@/components/layouts/header";

const HomePage: NextPage = ({ data, meta, logo }: any) => {
  
  return (
    <React.Fragment>
      <MetaPage {...meta} />
      <Header logo={logo} />
      <Home values={data} />
    </React.Fragment>
  );
};

export default HomePage;

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
          name: data?.homeTitle || "Trang chủ",
          description: data?.homeDescription || "",
          faviconIcon: data?.favicon ? data?.favicon : "",
        },
        logo: data?.logoWebsite ? data?.logoWebsite : "",
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
