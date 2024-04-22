import { Breadcrumb, Button } from "antd";
import Link from "next/link";
import useAOS from "@/hooks/useAOS";
import BaseButton from "@/components/common/BaseButton";
import api from "@/api/graphql";
import React from "react";
import { useRouter } from "next/router";

const NewDetail = ({ url, title, item }: any) => {
  useAOS();

  const [dataNews, setDataNews] = React.useState<any>([]);
  const [dataNewSource, setDataNewSource] = React.useState<any>([]);
  const route = useRouter();

  const getNews = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 1, size: 4, page: 1 });

      if (data.status.code === 200) {
        setDataNews(data.data);
      }
    } catch (error) {}
  };

  const getNewsSource = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 2, size: 1, page: 1 });

      if (data.status.code === 200) {
        setDataNewSource(data.data?.[0]);
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    getNews();
    getNewsSource();
  }, []);

  return (
    <div style={{ marginTop: 100 }}>
      {/* <div className="min-h-fit lg:min-h-screen h-fit pb-32 pt-[100px] bg-[url('/images/banner-policy.png')] bg-no-repeat bg-center bg-cover"></div> */}
      <div className="container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
            {
              title: <Link href={`/${url}`}>{title}</Link>,
            },
            {
              title: (
                <Link
                  href={`/${url}/${item.id}`}
                  className="text-blue-10 font-semibold"
                >
                  {item.title}
                </Link>
              ),
            },
          ]}
        />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-[100px]">
          <div className="col-span-full lg:col-span-9 ">
            <p className="title mb-[50px]">{item.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: item.content }}
              className="max-w-full"
            ></div>
          </div>
          <div className="col-span-full lg:col-span-3 flex flex-col">
            <div
              onClick={() => route?.push(`/blog/${dataNewSource?.id}`)}
              className="flex flex-col gap-[15px]"
            >
              <div>
                <img
                  src={dataNewSource?.image || ""}
                  alt="virtual-event"
                  className="object-cover"
                />
              </div>
              <p className="text-blue-10 font-bold">
                {dataNewSource?.title || ""}
              </p>
              <p>{dataNewSource?.description || ""}</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="border-b border-blue-10 pb-[30px] mt-[50px]"
        >
          <div className="border-l-4 border-orange-10 font-semibold text-2xl pl-2 text-blue-10">
            Tìm hiểu thêm
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-[50px] gap-[77px]">
            {dataNews?.length
              ? dataNews.map((value: any, index: any) => (
                  <div
                    onClick={() => route?.push(`/blog/${value?.id}`)}
                    key={index}
                    className="flex flex-col gap-[15px]"
                  >
                    <img src="/images/virtual-event.png" alt="virtual-event" />
                    <p className="text-blue-10 font-bold">{value.title}</p>
                    <p>{value.description}</p>
                  </div>
                ))
              : ""}
          </div>
          <div className="text-center mt-10">
            <BaseButton
              onClick={() => route?.push(`/blog/`)}
              className="btn-orange"
            >
              Xem thêm
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
