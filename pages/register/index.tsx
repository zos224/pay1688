import Register from "@/screens/auth/register";
import React from "react";
import MetaPage from "../Meta";
import api from "@/api/graphql";

const Page = ({meta}: any) => {
  return (
    <React.Fragment>
      <MetaPage {...meta} />
      <Register />
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
          name: "Tài khoản",
          description: data?.homeDescription || "",
          faviconIcon: data?.favicon ? data?.favicon : null,
        },
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
