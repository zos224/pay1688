import api from "@/api/graphql";
import Header from "@/components/layouts/header";
import NewDetail from "@/screens/new";
import React from "react";
import MetaPage from "../../Meta";

type typeProps = {
  data: any;
  meta: any;
};

const Page = ({ data, meta, logo }: any) => {
  return (
    <React.Fragment>
      <MetaPage {...meta} />
      <Header logo={logo} />
      <NewDetail url="policy" title="Chính sách" item={data} />;
    </React.Fragment>
  );
};
export default Page;

export async function getServerSideProps({ query }: any) {
  try {
    const { id } = query;
    const fetchApi = async () => {
      const { data } = await api.apiGetNew({ id });
      return data?.data;
    };
    let data = await fetchApi();
    const fetchApi2 = async () => {
      const { data } = await api.apiGetSetting({});
      return data?.data?.content;
    };
    const data2 = await fetchApi2();

    return {
      props: {
        data: data || {},
        meta: {
          title: data?.metaTitle || data?.title || "Tin tức",
          description: data?.metaDescription || data?.description || "Tin tức",
          openGraph: {
            images: [data?.image || "Tin tức"],
          },
          faviconIcon: data2?.home?.favicon ? data2?.home?.favicon : null,
        },
        logo: data2?.home?.logoWebsite ? data2?.home?.logoWebsite : null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
        meta: {},
      },
    };
  }
}
