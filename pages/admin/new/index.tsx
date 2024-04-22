import News from "@/screens/news";
import React from "react";
import MetaPage from "../../Meta";
import AdminLayout from "@/components/layouts/AdminLayout";

const Page = () => {
  return (
    <React.Fragment>
      <MetaPage name={"Quản lý"} description={""} faviconIcon={""} image={""} />
      <AdminLayout>
        <News />
      </AdminLayout>
    </React.Fragment>
  );
};

export default Page;
