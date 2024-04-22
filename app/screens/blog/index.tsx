import api from "@/api/graphql";
import BaseButton from "@/components/common/BaseButton";
import useAOS from "@/hooks/useAOS";
import { convertViewDate } from "@/utils/date";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  useAOS();

  const [dataNewHot, setDataNewHot] = React.useState<any>([]);
  const [dataNews, setDataNews] = React.useState<any>([]);
  const [dataNewSource, setDataNewSource] = React.useState<any>([]);
  const [dataNewPolicy, setDataNewPolicy] = React.useState<any>([]);

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(1);
  const route = useRouter();

  const getNewsHot = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 4, size: 3, page });

      if (data.status.code === 200) {
        setDataNewHot(data.data);
        setTotal(Math.round(data.status.total));
      }
    } catch (error) {}
  };

  const getNews = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 1, size: 3, page });

      if (data.status.code === 200) {
        setDataNews(data.data);
        setTotal(Math.round(data.status.total));
      }
    } catch (error) {}
  };

  const getNewsPolicy = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 3, size: 4, page });

      if (data.status.code === 200) {
        setDataNewPolicy(data.data);
        setTotal(Math.round(data.status.total));
      }
    } catch (error) {}
  };

  const getNewsSource = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 2, size: 4, page });

      if (data.status.code === 200) {
        setDataNewSource(data.data);
        setTotal(Math.round(data.status.total));
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    getNewsHot();
    getNews();
    getNewsPolicy();
    getNewsSource();
  }, [page]);

  return (
    <div>
      {/* <div className=" h-fit pb-32 pt-[100px] bg-[url('/images/banner-blog.png')] bg-no-repeat bg-center bg-cover"></div> */}
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
            {
              title: (
                <Link href="/blog" className="text-blue-10 font-semibold">
                  Blog
                </Link>
              ),
            },
          ]}
        />
        <div className="my-[30px]">
          <div className=" title">Bài viết nổi bật</div>
          <div className=" grid lg:grid-cols-12 gap-10 mt-[30px]">
            {dataNewHot?.length ? (
              <div
                onClick={() => route?.push(`/blog/${dataNewHot?.[0]?.id}`)}
                style={{ backgroundImage: `url(${dataNewHot?.[0]?.image})` }}
                className="text-white p-10 flex flex-col justify-end col-span-full lg:col-span-9 bg-no-repeat bg-cover bg-top overflow-hidden rounded-2xl"
              >
                <div className="text-4xl font-semibold">
                  {dataNewHot?.[0]?.title}
                </div>
                <div>
                  <span>{convertViewDate(dataNewHot?.[0]?.createdAt)}</span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="col-span-full lg:col-span-3 flex flex-col gap-4">
              {dataNewHot?.length
                ? dataNewHot.map((value: any, index: any) => {
                    if (index === 0)
                      return <React.Fragment key={index}></React.Fragment>;

                    return (
                      <div
                        onClick={() => route?.push(`/blog/${value?.id}`)}
                        key={index}
                      >
                        <div>
                          <img
                            src={value.image}
                            alt="virtual-event"
                            className="object-cover"
                          />
                        </div>
                        <div className="font-bold text-2xl text-blue-10">
                          {value.title}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <div className="my-[30px] title">Bài viết mới nhất</div>
        <div className="flex flex-col gap-6">
          {dataNews?.length
            ? dataNews.map((value: any, index: any) => (
                <div
                  onClick={() => route?.push(`/blog/${value?.id}`)}
                  key={index}
                  className="flex flex-col lg:flex-row gap-5"
                >
                  <img
                    style={{ maxWidth: "400px" }}
                    src={value.image}
                    alt="virtual-event"
                  />
                  <div
                    style={{ minWidth: "200px" }}
                    className="flex flex-col gap-2"
                  >
                    <p className="text-blue-10 font-semibold">{value.title}</p>
                    <p>{value.description}</p>
                    <p>{convertViewDate(value?.createdAt)}</p>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <div className="border-b border-blue-10 pb-[30px] mt-[50px]">
          <div className="border-l-4 border-orange-10 font-semibold text-2xl pl-2 text-blue-10">
            Nguồn hàng
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-[50px] gap-10 lg:gap-[77px]">
            {dataNewSource?.length
              ? dataNewSource.map((value: any, index: any) => (
                  <div
                    onClick={() => route?.push(`/blog/${value?.id}`)}
                    key={index}
                    className="flex flex-col gap-[15px]"
                  >
                    <img src={value.image} alt="virtual-event" />
                    <p className="text-blue-10 font-bold">{value.title}</p>
                    {value.description}
                  </div>
                ))
              : ""}
          </div>
          {/* <div className="text-center mt-10">
            <BaseButton onClick={() => route?.push(`/blog`)}>
              Xem thêm
            </BaseButton>
          </div> */}
        </div>
        <div className="border-b border-blue-10 pb-[30px] mt-[50px]">
          <div className="border-l-4 border-orange-10 font-semibold text-2xl pl-2 text-blue-10">
            Chính sách
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-[50px] gap-10 lg:gap-[77px]">
            {dataNewPolicy?.length
              ? dataNewPolicy.map((value: any, index: any) => (
                  <div
                    onClick={() => route?.push(`/policy/${value?.id}`)}
                    key={index}
                    className="flex flex-col gap-[15px]"
                  >
                    <img src={value.image} alt="virtual-event" />
                    <p className="text-blue-10 font-bold">{value.title}</p>
                    {value.description}
                  </div>
                ))
              : ""}
          </div>
          <div className="text-center mt-10">
            <BaseButton onClick={() => route?.push(`/policy`)}>
              Xem thêm
            </BaseButton>
          </div>
        </div>
        <div className=" title mx-auto my-[50px] text-center">
          Đối tác vận chuyển uy tín <br /> của nhiều công ty hàng đầu Việt Nam
        </div>
      </div>
    </div>
  );
};

export default Blog;
