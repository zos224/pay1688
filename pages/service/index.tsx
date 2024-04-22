import api from "@/api/graphql";
import Header from "@/components/layouts/header";
import type { NextPage } from "next";
import React from "react";
import MetaPage from "../Meta";
import dynamic from "next/dynamic";

const ServicePage = dynamic(() => import("@/screens/service"), {
  ssr: false,
  loading: () => <></>,
});

const HomePage: NextPage = ({ data, meta, logo }: any) => {
  return (
    <React.Fragment>
      <MetaPage {...meta} />
      <Header logo={logo} />
      <ServicePage service={data} />
    </React.Fragment>
  );
};

export default HomePage;

export async function getServerSideProps() {
  try {
    const fetchApi = async () => {
      const { data } = await api.apiGetSetting({});
      return data?.data?.content;
    };
    const data = await fetchApi();

    return {
      props: {
        data: data?.service || {},
        meta: {
          name: "Dịch vụ",
          description: data?.home?.homeDescription || "",
          faviconIcon: data?.home?.favicon ? data?.home?.favicon : null,
        },
        logo: data?.home?.logoWebsite ? data?.home?.logoWebsite : null,
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
