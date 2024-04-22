import api from "@/api/graphql";
import AdminLayout from "@/components/layouts/AdminLayout";
import ServicePage from "@/screens/admin/service";
import type { NextPage } from "next";
import React from "react";
import MetaPage from "../../Meta";

const Page: NextPage = ({ data }: any) => {
  return (
    <React.Fragment>
      <MetaPage name={"Quản lý"} description={""} faviconIcon={""} image={""} />
      <AdminLayout>
        <ServicePage setting={data} />
      </AdminLayout>
    </React.Fragment>
  );
};

export default Page;

export async function getServerSideProps() {
  try {
    const fetchApi = async () => {
      const { data } = await api.apiGetSetting({});
      return data?.data?.content;
    };

    return {
      props: {
        data: await fetchApi(),
      },
    };
  } catch (error) {
    return {
      props: {
        nominations: [],
      },
    };
  }
}
