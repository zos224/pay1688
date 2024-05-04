// import { typeServicePage } from "@/api/type/settings";
// import BaseButton from "@/components/common/BaseButton";
// import useAOS from "@/hooks/useAOS";
// import useSettings from "@/hooks/useSettings";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// type typeProps = {
//   service: typeServicePage;
// };
// const ServicePage = ({ service }: typeProps) => {
//   // const [{ setting }, { handleSettings }] = useSettings();
//   // const { service } = setting || {};

//   // React.useEffect(() => {
//   //   handleSettings?.getSetting();
//   // }, []);
//   useAOS();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 100);
//       console.log(scrollPosition);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div>
//       <div
//         style={{
//           backgroundImage: `url(${
//             service?.banner || "/images/banner-service.png"
//           })`,
//         }}
//         className="min-h-[60vh] lg:min-h-[80vh] h-fit pb-32 pt-[100px] bg-no-repeat bg-center bg-cover"
//       >
//         <div className="container flex">
//           <div className="flex-1">
//             <div className="max-w-[60%] flex flex-col gap-[30px]">
//               <div className="title">{service?.titleBanner || ""}</div>
//               <div className="text-blue-10 font-medium">
//                 {service?.descriptionBanner || ""}
//               </div>
//             </div>
//             <BaseButton href={service?.urlBanner || ""} className="mt-[30px]" icon={faShoppingCart}>
//             Tạo đơn đặt hàng
//             </BaseButton>
//           </div>
//           <div className="hidden group flex-1 relative lg:flex items-end justify-center">
//             <div
//               className={`z-10 absolute group-hover:-translate-y-[900px] ${
//                 isScrolled
//                   ? "-translate-y-[900px]"
//                   : "-translate-y-10 -translate-x-40"
//               } transition-all duration-1000`}
//             >
//               <img src="/images/con-1.png" alt="service" />
//             </div>
//             <div
//               className={`z-10 absolute group-hover:-translate-y-[900px] transition-all duration-1000 ${
//                 isScrolled ? "-translate-y-[900px]" : "translate-y-10"
//               }`}
//             >
//               <img src="/images/con-2.png" alt="service" />
//             </div>
//             <div className="absolute top-1/2 h-[45vh] w-[90%] flex items-center justify-center">
//               <div className="absolute top-0 right-0">
//                 <img
//                   src="/images/fr-con-1.png"
//                   alt="service"
//                   className={`object-cover ${
//                     isScrolled ? "scale-100" : "scale-0"
//                   } group-hover:scale-100 transition-all duration-1000`}
//                 />
//               </div>
//               <div className="absolute bottom-0 right-40">
//                 <img
//                   src="/images/fr-con-2.png"
//                   alt="service"
//                   className={`object-cover ${
//                     isScrolled ? "scale-100" : "scale-0"
//                   } group-hover:scale-100 transition-all duration-1000`}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="/images/fr-con-3.png"
//                   alt="service"
//                   className={`object-cover ${
//                     isScrolled ? "scale-100" : "scale-0"
//                   } group-hover:scale-100 transition-all duration-1000`}
//                 />
//               </div>
//               <div className="absolute bottom-10 left-24">
//                 <img
//                   src="/images/fr-con-4.png"
//                   alt="service"
//                   className={`object-cover ${
//                     isScrolled ? "scale-100" : "scale-0"
//                   } group-hover:scale-100 transition-all duration-1000`}
//                 />
//               </div>
//               <div className="absolute top-4 left-10">
//                 <img
//                   src="/images/fr-con-5.png"
//                   alt="service"
//                   className={`object-cover ${
//                     isScrolled ? "scale-100" : "scale-0"
//                   } group-hover:scale-100 transition-all duration-1000`}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container text-center mt-5">
//         <div>
//           <div className="title mt-[70px]">
//             Đặt hàng nhanh chóng và dễ dàng hơn
//           </div>
//           <div className="text-left mt-10 lg:mt-[100px] grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20">
//             {service?.orderShip?.map((item, i) => {
//               return (
//                 <div key={i}>
//                   <img
//                     src={item?.logo || "/images/icon-phone-mobile.svg"}
//                     className="max-w-[30px] max-h-[30px]"
//                     alt=""
//                   />
//                   <p className="text-xl text-blue-10 mb-5 mt-4">
//                     {item?.title || ""}
//                   </p>
//                   <ul className="list-disc list-inside pl-2 text-gray-5">
//                     {item?.items?.map((_, key) => {
//                       return <li key={key}>{_?.title}</li>;
//                     })}
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//           <BaseButton className="mt-[60px]">Xem biểu phí</BaseButton>
//         </div>
//       </div>
//       <div className="container">
//         <div className="title text-center mb-10 lg:mb-[70px] mt-10 lg:mt-[100px]">
//           Quy trình đặt hàng Trung Quốc
//         </div>
//         <div className="flex items-center">
//           <div>
//             <img
//               data-aos="fade-right"
//               data-aos-duration="100"
//               src={service?.processTq?.banner}
//               alt=""
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 lg:mt-[100px] bg-gray-3">
//         <div className="container py-[61px]">
//           <div className="title font-semibold">
//             Hướng dẫn tìm kiếm nguồn hàng
//           </div>
//           <div className="flex flex-wrap mt-10 lg:mt[100px] justify-center gap-x-20 gap-y-12">
//             {service?.supportSearch?.map((item, i) => {
//               return (
//                 <div className="w-[318px]" key={i}>
//                   <div>
//                     <img
//                       src={item?.logo || "/images/icon-image.svg"}
//                       className="max-w-[30px] max-h-[30px]"
//                       alt=""
//                     />
//                   </div>
//                   <div className="text-blue-10 text-xl mt-4 mb-5 font-medium">
//                     {item?.title || ""}
//                   </div>
//                   <div>{item?.description || ""}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div className="container flex flex-col items-center text-center mt-10 lg:mt-[100px]">
//         <div className="title text-center">
//           Sẵn sàng hợp tác cùng chúng tôi?
//         </div>
//         <div className="my-[30px] max-w-[457px] text-gray-5">
//           {service?.ourCooperate?.title || ""}
//         </div>
//         <BaseButton href={service?.ourCooperate?.url || ""}>Bắt đầu ngay
//         </BaseButton>
//         <div className="container text-gray-5 mt-10 lg:mt-[94px]">
//           {service?.ourCooperate?.description || ""}
//         </div>
//       </div>
//       <div className="container mt-[30px]">
//         <div className="text-blue-10 text-4xl mb-[30px] font-medium">
//           Xu hướng nhập hàng Trung Quốc về Việt Nam để kinh doanh
//         </div>
//         <div>{service?.trendVn?.description || ""}</div>
//       </div>
//       <div className="container">
//         <div className=" w-full">
//           <img
//             src={
//               service?.trendVn?.banner ||
//               "/images/uu-diem-khi-nhap-hang-trung-quoc.png"
//             }
//             alt=""
//             className="mx-auto"
//           />
//         </div>
//         <div className="text-blue-10 text-4xl font-medium my-[30px]">
//           Nguồn hàng nội địa Trung có chất lượng cao
//         </div>
//         <p>{service?.source?.description || ""}</p>
//         <div className="text-blue-10 text-4xl font-medium my-[30px]">
//           Thuận tiện trong việc giao thương, vận chuyển về Việt Nam
//         </div>
//         <p>{service?.ship?.description || ""}</p>
//         <div className="text-center mb-[100px] mt-10">
//           <BaseButton href={service?.ship?.url || ""} className="t-[30px]">
//             Xem thêm
//           </BaseButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicePage;

import api from "@/api/graphql";
import useAOS from "@/hooks/useAOS";
import NewItem from "@/screens/new/NewItem";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
const Service = () => {
  useAOS();
  const [dataNewPolicy, setDataNewPolicy] = React.useState<any>([]);

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(1);
  const getNewsPolicy = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 8, size: 9, page });

      if (data.status.code === 200) {
        setDataNewPolicy(data.data);
        setTotal(Math.ceil(data.status.total / 9));
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    getNewsPolicy();
  }, [page]);

  return (
    <div className="news-container">
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
          },
          {
            title: <Link href={`/service`}>Dịch vụ</Link>,
          },
        ]}
      />
      <br />
      <br />
      <div style={{ minHeight: 600 }} className="news-list">
        {dataNewPolicy.map((value: any, index: any) => (
          <NewItem className="news-item" item={value} key={index} />
        ))}
      </div>
      <div className="rq-table-pagination">
        {Array(total)
          .fill("")
          .map((value: any, key: any) => (
            <div
              className={`rq-table-pagination-item ${
                key + 1 === page ? "rq-table-pagination-checked" : ""
              }`}
              key={key + (value || 0)}
              onClick={() => setPage(key + 1)}
            >
              {key + 1}
            </div>
          ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Service;

