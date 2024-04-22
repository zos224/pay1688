import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import BaseButton from "@/components/common/BaseButton";
import BaseSwiper from "@/components/common/BaseSwiper";
import CollapsibleHover from "@/components/common/CollapsibleHover";
import useAOS from "@/hooks/useAOS";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { faUsd } from "@fortawesome/free-solid-svg-icons/faUsd";
import "swiper/css";

import { typeHomePage } from "@/api/type/settings";
import Link from "next/link";
import { useRouter } from "next/router";

const slides = [
  "/images/aliexpress-logo.png",
  "/images/H&M-logo.png",
  "/images/Alibaba-Logo.png",
  "/images/Shopee 2.png",
  "images/taobao_logo.png",
  "images/Tmall-Logo 2.png",
  "/images/alipay-logo-vector 2.png",
  "images/zara-logo.png",
  "images/zara-logo.png",
];
type typeProps = {
  values: typeHomePage;
};
const HomePage = ({ values }: typeProps) => {
  // const [{ setting }, { handleSettings }] = useSettings();
  // const { home: values } = setting || {};

  // React.useEffect(() => {
  //   handleSettings?.getSetting();
  // }, []);

  useAOS();

  return (
    <div className="relative overflow-x-hidden">
      <div className=" z-10 flex flex-col items-end w-52 gap-5 absolute top-[180px] text-blue-10 right-0">
        <button className="group h-10 rounded-l-full p-5 bg-white translate-x-3/4 hover:translate-x-0 inline-flex gap-2 duration-500 ease-linear transition-all items-center">
          <FontAwesomeIcon icon={faWallet} className="size-6" />
          <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap">
            <Link href={values?.calculateShippingChargeUrl || ""}>
              Tính cước vận chuyển
            </Link>
          </span>
        </button>
        <button className="group h-10 rounded-l-full p-5 bg-white inline-flex gap-2 translate-x-2/3  duration-500 hover:translate-x-0 transition-all items-center">
          <FontAwesomeIcon icon={faUsd} className="size-6" />
          <span className="opacity-0 group-hover:opacity-100 ">
            <Link href={values?.lookUpThePriceUrl || ""}> Tra cứu tỉ giá</Link>
          </span>
        </button>
        <button className="group h-10 rounded-l-full p-5 bg-white inline-flex gap-2 translate-x-[71%]  duration-500 hover:translate-x-0 transition-all items-center">
          <FontAwesomeIcon icon={faTruck} className="size-6" />
          <span className="opacity-0 group-hover:opacity-100 ">
            <Link href={values?.lookUpBillUrl || ""}> Tra cứu vận đơn</Link>
          </span>
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${values?.banner || "images/banner-home.png"})`,
        }}
        className={`min-h-[60vh] h-fit pb-32 pt-[100px] 
         bg-no-repeat bg-center bg-cover`}
      >
        <div className="flex justify-around container w-9/12 pt-20 lg:pt-[117px] gap-10 lg:flex-row flex-col">
          <div className="py-[28px] px-[41px] rounded-lg bg-glass shadow-glass hover:bg-blue-10">
            <Image
              src={values?.depositVnTq?.logo || ""}
              width={40}
              height={40}
              alt="box"
            />
            <div className="text-blue-10 font-bold max-w-[293px] text-lg mt-5">
              {values?.depositVnTq?.title || ""}
            </div>
            <div className="text-white max-w-[319px] mt-4">
              {values?.depositVnTq?.description || ""}
            </div>
            <BaseButton className="btn-orange mt-5">Bắt đầu ngay</BaseButton>
          </div>
          <div className="py-[28px] px-[41px] rounded-lg bg-glass shadow-glass hover:bg-blue-10 transition-all duration-300">
            <Image
              src={values?.depositTqVn?.logo || ""}
              width={40}
              height={40}
              alt="wallet"
            />
            <div className="text-blue-10 font-bold max-w-[293px] text-lg mt-5">
              {values?.depositTqVn?.title || ""}
            </div>
            <div className="text-white max-w-[319px] mt-4">
              {values?.depositTqVn?.description || ""}
            </div>
            <BaseButton className="btn-orange mt-5">Bắt đầu ngay</BaseButton>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title text-center mt-10 lg:mt-[90px] mb-8">
          {(values as any)?.title7 || ""}
        </div>
        <BaseSwiper slides={values?.ecommerces || slides} />
      </div>

      <div className="container flex gap-10 flex-col lg:flex-row lg:gap-28 mt-10 lg:mt-[100px]">
        <Image
          src="/images/alipay.jpg"
          width={562}
          height={406}
          className="flex-1 transition-transform rounded-3xl hover:shadow-2xl duration-500 transform-gpu hover:scale-110"
          alt="alipay"
        />
        <div className="flex-1">
          <div className="title lg:text-3xl text-center mx-auto">
            {(values as any)?.title8 || ""}
          </div>
          <div className="mt-[62px] text-xl">
            {values?.paymentService?.description}
          </div>
          <div className="mt-[72px] text-center lg:text-left">
            <BaseButton>
              <Link href={values?.paymentService?.url || ""}>
                Tra cứu tỷ giá hôm nay
              </Link>
            </BaseButton>
          </div>
        </div>
      </div>
      <div className="mt-12 py-16 container flex flex-col lg:flex-row gap-10 lg:gap-28 justify-between">
        <div className="flex-1">
          <div
            data-aos="fade-down-left"
            className="mb-7 title lg:text-3xl font-semibold"
          >
            {(values as any)?.title9 || ""}
          </div>
          <div data-aos="zoom-in" className="text-xl">
            {values?.depositService?.description || ""}
          </div>
          <div
            data-aos="fade-up-left"
            className="lg:text-left text-center mt-7"
          >
            <BaseButton>
              <Link href={values?.depositService?.url || ""}>Xem thêm</Link>
            </BaseButton>
          </div>
        </div>
        <table className="bg-white rounded-lg shadow flex-1 max-w-full">
          <thead>
            <tr>
              {values?.depositService?.tableDeposit?.thead?.map((item, i) => {
                return (
                  <th key={i} className="text-center py-4 border-b">
                    {item.content}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {values?.depositService?.tableDeposit?.tbody?.map(
              (item: any, i) => {
                return (
                  <tr key={i}>
                    {values?.depositService?.tableDeposit?.thead?.map(
                      (value, i) => {
                        return (
                          <td className="text-center py-4">
                            {item[value?.content as any]}
                          </td>
                        );
                      }
                    )}
                  </tr>
                );
              }
            )}

            <tr>
              {values?.depositService?.tableDeposit?.thead?.map((value, i) => {
                if (value?.url) {
                  return (
                    <td className="text-center py-4">
                      <BaseButton className="btn-blue">
                        Tạo đơn đặt hàng
                      </BaseButton>
                    </td>
                  );
                } else {
                  return <td className="text-center py-4"></td>;
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container flex mt-12 lg:flex-row flex-col gap-10">
        <div className="flex-1">
          <div className="title mb-14">{(values as any)?.title}</div>
          {values?.depositProcess?.step?.map((item, i) => (
            <CollapsibleHover key={i} index={i} title={item?.title || ""}>
              {item.description}
            </CollapsibleHover>
          ))}
        </div>
        <div className="flex-1 text-center">
          <img
            src={values?.depositProcess?.banner || "/images/warehourse.png"}
            alt="warehourse"
            className="object-cover"
          />
          <BaseButton className="btn-orange mx-auto" icon={faShoppingCart}>
            <Link href={values?.depositProcess?.url || ""}>Tạo đơn ký gửi</Link>
          </BaseButton>
        </div>
      </div>

      <div className="container mt-10 lg:mt-[100px] flex items-center lg:flex-row flex-col gap-10">
        <div className="flex-1 flex justify-center relative">
          <img
            // data-aos="fade-up"
            // data-aos-duration="100"
            src={values?.financialManagement?.banner}
            className=""
          />{" "}
        </div>
        <div className="flex-1">
          <div className="title text-blue-10 font-semibold mb-10">
            {(values as any)?.title2}
          </div>
          <div>{values?.financialManagement?.description}</div>
        </div>
      </div>

      <div className="container mt-10 lg:mt-[100px] flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className=" title  mb-14">{(values as any)?.title3}</div>
          <div className="grid grid-cols-2 gap-12">
            {values?.orderManage?.itemOrder?.map((item, i) => {
              return (
                <div key={i}>
                  <div className="text-2xl text-blue-10 font-medium">
                    {item?.title}
                  </div>
                  <div data-aos="fade-up">{item?.description}</div>
                </div>
              );
            })}

            <div>
              <BaseButton>
                <Link href={values?.orderManage?.url || ""}>Đến dashboard</Link>
              </BaseButton>
            </div>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src="/images/mn-order.png"
            alt="order"
            className="object-cover "
          />
        </div>
      </div>

      <div className="container mt-10 lg:mt-[100px] flex flex-col lg:flex-row gap-10">
        <div className="flex-1 hover:scale-110 transition-all duration-300">
          <img src="/images/reson.png" alt="reson" className="object-cover" />
        </div>
        <div className="flex-1">
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            className="title"
          >
            {(values as any)?.title4}
          </div>
          <ul className="text-blue-10 mt-12 flex flex-col gap-6">
            {values?.reasonsPayment?.map((item, i) => {
              return (
                <li
                  key={i}
                  data-aos="fade-down"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="100"
                  className="flex items-center gap-6 "
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="size-8 text-orange-10"
                  />
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="title my-[50px] text-center">
        {(values as any)?.title5}
      </div>

      <div className="flex justify-center">
        <img
          src={values?.cooperateWithUs || "/images/content-home-bottom.png"}
          alt=""
          className="object-cover scale-[0.999]"
        />
      </div>

      <div className="container text-center mt-10">
        <div className="text-4xl text-blue-10 font-medium">
          {(values as any)?.title6}
        </div>
        <div className="mt-5 mb-7">{values?.partner?.description}</div>
        <BaseButton className="mb-7">
          <Link href={values?.partner?.url || ""}>Tạo tài khoản ngay</Link>
        </BaseButton>
      </div>
    </div>
  );
};

export default HomePage;
