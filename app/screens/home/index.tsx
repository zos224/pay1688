import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
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
import { useState } from "react";

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
  const [moTigia, setMoTigia] = useState(false);
  const [moTinhCuoc, setMoTinhCuoc] = useState(false);
  const [moVandon, setMoVandon] = useState(false);

  useAOS();

  return (
    <div className="relative overflow-x-hidden">
      <div className="z-10 fixed top-[180px]  right-0">
        {!moTigia && !moTinhCuoc && !moVandon ? 
        (
        <div className=" flex flex-col items-end w-52 gap-3  text-blue-10">
          <button onClick={() => {setMoTinhCuoc(true); setMoTigia(false); setMoVandon(false)}} className="group h-10 rounded-l-full p-5 bg-white translate-x-3/4 hover:translate-x-0 inline-flex gap-2 duration-200 ease-in-out transition-all items-center">
            <FontAwesomeIcon icon={faWallet} className="size-6" />
            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Tính cước vận chuyển
            </span>
          </button>
          <button onClick={() => {setMoTigia(true); setMoTinhCuoc(false); setMoVandon(false)}} className="group h-10 rounded-l-full p-5 bg-white translate-x-2/3 hover:translate-x-0 inline-flex gap-2 duration-200 ease-in-out transition-all items-center">
            <FontAwesomeIcon icon={faUsd} className="size-6" />
            <span className="opacity-0 group-hover:opacity-100 ">
              Tra cứu tỉ giá
            </span>
          </button>
          <button onClick={() => {setMoVandon(true); setMoTigia(false); setMoTinhCuoc(false)}} className="group h-10 rounded-l-full p-5 bg-white translate-x-[71%] hover:translate-x-0 inline-flex gap-2 duration-200 ease-in-out transition-all items-center">
            <FontAwesomeIcon icon={faTruck} className="size-6" />
            <span className="opacity-0 group-hover:opacity-100 ">
              Tra cứu vận đơn
            </span>
          </button>
        </div> 
        ) : (
          <div className="flex flex-col items-end">
            <div className="flex w-fit items-center bg-gray-5 rounded-tl-xl">
              <div className={`px-5 rounded-tl-xl py-3 cursor-pointer ${moTinhCuoc ? "bg-white" : "text-white"}`} onClick={() => {setMoTinhCuoc(true); setMoTigia(false); setMoVandon(false)}}>
                <FontAwesomeIcon icon={faWallet} className="size-6" />
              </div>
              <div className={`px-5 py-3 cursor-pointer ${moTigia ? "bg-white" : "text-white"}`} onClick={() => {setMoTigia(true); setMoTinhCuoc(false); setMoVandon(false)}}>
                <FontAwesomeIcon icon={faUsd} className="size-6" />
              </div>
              <div className={`px-5 py-3 cursor-pointer ${moVandon ? "bg-white" : "text-white"}`} onClick={() => {setMoVandon(true); setMoTigia(false); setMoTinhCuoc(false)}}>
                <FontAwesomeIcon icon={faTruck} className="size-6" />
              </div>
              <div className={`px-5 py-3 cursor-pointer text-white`} onClick={() => {setMoTigia(false); setMoTinhCuoc(false); setMoVandon(false)}}>
                <FontAwesomeIcon icon={faChevronRight} className="size-6"/>
              </div>
            </div>
            <div className="w-100 bg-white p-3 rounded-l-md max-h-96 overflow-auto">
              {moTinhCuoc && 
                <div>
                  <div className="border-b text-xl uppercase py-2">
                    Tính cước vận chuyển TQ-VN
                  </div>
                  <div className="flex gap-2 text-sm mt-3">
                    <div className="w-1/3">
                      <label>Khối lượng (Kg)</label>
                      <input className="w-full p-2 mt-2 border border-gray-10 rounded-md outline-blue-10" placeholder="Khối lượng"></input>
                    </div>
                    <div className="w-2/3">
                      <label>Kích thước ( D x R x C) (cm) </label>
                      <div className="flex gap-2 mt-2">
                        <input className="w-full p-2 border border-gray-10 rounded-md outline-blue-10" placeholder="Dài"></input>
                        <input className="w-full p-2 border border-gray-10 rounded-md outline-blue-10" placeholder="Rộng"></input>
                        <input className="w-full p-2 border border-gray-10 rounded-md outline-blue-10" placeholder="Cao"></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Giá trị hàng hóa</label>
                    <input className="w-full p-2 border border-gray-10 rounded-md outline-blue-10 mt-2" placeholder="Giá trị hàng hóa"></input>
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Chọn kho nhận ở TQ</label>
                    <select className="w-full p-2 border border-gray-10 rounded-md outline-blue-10 mt-2">
                      <option>Thẩm Quyến</option>
                      <option>Đại Hán</option>
                      <option>Kinh Thành</option>
                    </select>
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Chọn kho nhận ở VN</label>
                    <select className="w-full p-2 border border-gray-10 rounded-md outline-blue-10 mt-2"> 
                      <option>Hà Nội</option>
                      <option>Đà Nẵng</option>
                      <option>TP Hồ Chí Minh</option>
                    </select>
                  </div>
                  <div className="mt-2 pb-4 text-sm">
                    <label>Chọn các dịch vụ đi kèm</label>
                    <div className="flex items-center flex-wrap gap-y-2 mt-2">
                      <div className="flex items-center w-1/3">
                        <input type="checkbox" className="mr-2 peer relative appearance-none w-5 h-5 rounded-full border border-black checked:bg-blue-10" />
                        <label>Nẹp giấy</label>
                      </div>
                      <div className="flex items-center w-1/3">
                        <input type="checkbox" className="mr-2 peer relative appearance-none w-5 h-5 rounded-full border border-black checked:bg-blue-10" />
                        <label>Đóng gỗ</label>
                      </div>
                      <div className="flex items-center w-1/3">
                        <input type="checkbox" className="mr-2 peer relative appearance-none w-5 h-5 rounded-full border border-black checked:bg-blue-10" />
                        <label>Dễ vỡ</label>
                      </div>
                      <div className="flex items-center w-1/3">
                        <input type="checkbox" className="mr-2 peer relative appearance-none w-5 h-5 rounded-full border border-black checked:bg-blue-10" />
                        <label>Bảo hiểm</label>
                      </div>
                      <div className="flex items-center w-1/3">
                        <input type="checkbox" className="mr-2 peer relative appearance-none w-5 h-5 rounded-full border border-black checked:bg-blue-10" />
                        <label>Kiểm hàng</label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 border-t border-black">
                      <label>Giá trị vận chuyển ước tính</label>
                      <div className="flex items-center w-full bg-gray-3 rounded-full px-4 font-bold mt-2">
                        <input className="border-none outline-none p-2 w-full bg-gray-3 rounded-full" type="text" placeholder="0.00"></input>
                        <span>vnđ</span>
                      </div>
                      <i className="text-sm">Hai triệu sáu trăm mười lăm nghìn đồng</i>
                  </div>
                  <div>
                    <button className="w-full bg-blue-10 text-white hover:bg-blue-20 rounded-md p-2 mt-4">Tạo đơn vận chuyển</button>
                  </div>
                </div>
              }
              {moTigia &&
                <div>
                  <div className="border-b text-xl uppercase py-2">
                    Tra cứu tỉ giá
                  </div>
                  <div className="mt-4">
                    <label>Nhập số tiền cần thanh toán hộ</label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center w-3/4 bg-gray-3 rounded-full px-4 font-bold mt-2">
                        <input className="border-none outline-none p-2 w-full bg-gray-3 rounded-full" min={0} type="number" inputMode="decimal" placeholder="0"></input>
                        <span>NDT(¥)</span>
                      </div>
                      <div className="w-1/4 mt-2">
                        <button className="bg-blue-10 hover:bg-blue-20 text-white rounded-md w-full p-2">Tra cứu</button>
                      </div>
                    </div>
                    <i className="text-sm">Số tệ càng nhiều, Pay1688 sẽ áp dụng tỉ giá càng thấp</i>
                  </div>
                  <div className="mt-6">
                    <div className="font-semibold">Kết quả quy đổi</div>
                    <div className="flex items-center w-full bg-gray-3 rounded-full px-4 py-3 font-bold mt-2">
                      <span className="w-3/5">100.000</span>
                      <span className="w-2/5">Việt Nam Đồng</span>
                    </div>
                    <i className="text-sm mx-3">Bằng chữ: Một trăm nghìn đồng</i>
                  </div>
                  <div className="text-sm mx-3 mt-4">
                    Tỉ giá áp dụng: 1 ¥ = 3.730 đ
                  </div>
                  <div>
                    <button className="w-full bg-blue-10 text-white hover:bg-blue-20 rounded-md p-2 mt-4">Tạo yêu cầu thanh toán hộ</button>
                  </div>
                </div>
              }
              {moVandon &&
                <div>
                  <div className="border-b text-xl uppercase py-2">
                    Tra cứu vận đơn
                  </div>
                  <div className="mt-3 text-sm">
                    Nhập mã vận đơn
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <input className="px-4 py-2 w-3/4 border border-black rounded-lg" type="text" placeholder="VD: TAUYHSKJP"></input>
                    <div className="w-1/4">
                      <button className="bg-blue-10 hover:bg-blue-20 text-white rounded-md w-full p-2">Tra cứu</button>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="font-semibold">Trạng thái</div>
                    <table className="mt-4">
                      <thead>
                        <tr>
                          <th>Thời gian</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2">20/04/2024</td>
                          <td className="px-4 py-2">Đơn vị vận chuyển đã lấy hàng</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">21/04/2024</td>
                          <td className="px-4 py-2">Đã trung chuyển đến kho Thẩm Quyến</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">22/04/2024</td>
                          <td className="px-4 py-2">Đơn hàng đang được thông quan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              }
            </div>
          </div>
        )}
      </div>
     
      <div
        style={{
          backgroundImage: `url(${values?.banner || "images/banner-home.png"})`,
        }}
        className={`min-h-[60vh] h-fit pb-32 pt-[100px] 
         bg-no-repeat bg-center bg-cover`}
      >
        <div className="uppercase w-fit mx-auto px-2 mt-16 bg-yellow-50 text-red-600 text-center lg:text-3xl text-xl">pay1688 hệ thống - thanh toán - ký gửi - hàng đầu việt nam</div>
        <div className="flex justify-around container w-9/12 pt-20 lg:pt-[117px] gap-10 lg:flex-row flex-col">
          <div className="py-[28px] px-[41px] rounded-lg shadow-glass bg-blue-10">
            <Image
              src={values?.depositVnTq?.logo || ""}
              width={40}
              height={40}
              alt="box"
            />
            <div className="text-white font-bold max-w-[293px] text-lg mt-5">
              {values?.depositVnTq?.title || ""}
            </div>
            <div className="text-white max-w-[319px] mt-4">
              {values?.depositVnTq?.description || ""}
            </div>
            <button className="btn-orange px-4 py-2 mt-5">Bắt đầu ngay</button>
          </div>
          <div className="py-[28px] px-[41px] rounded-lg shadow-glass bg-blue-10 transition-all duration-300">
            <Image
              src={values?.depositTqVn?.logo || ""}
              width={40}
              height={40}
              alt="wallet"
            />
            <div className="text-white font-bold max-w-[293px] text-lg mt-5">
              {values?.depositTqVn?.title || ""}
            </div>
            <div className="text-white max-w-[319px] mt-4">
              {values?.depositTqVn?.description || ""}
            </div>
            <button className="btn-orange px-4 py-2 mt-5">Bắt đầu ngay</button>
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
          width={500}
          height={406}
          className="flex-1 transition-transform hover:shadow-2xl duration-500 transform-gpu hover:scale-110"
          alt="alipay"
        />
        <div className="flex-1">
          <div className="title lg:text-3xl text-center mx-auto">
            {(values as any)?.title8 || ""}
          </div>
          <div className="mt-[62px] text-xl">
            {values?.paymentService?.description}
          </div>
          <div className="mt-[72px] text-center lg:text-left flex justify-center">
            <button className="bg-blue-10 hover:bg-blue-20 text-white px-4 py-2">
              <Link href={values?.paymentService?.url || ""}>
                Tra cứu tỷ giá hôm nay
              </Link>
            </button>
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
            className="lg:text-left text-center mt-7 flex justify-center"
          >
            <button className="bg-blue-10 hover:bg-blue-20 text-white px-4 py-2">
              <Link href={values?.depositService?.url || ""}>Xem thêm</Link>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/images/banggia.PNG"
            width={562}
            height={406}
            className="w-full object-contain"
            alt="bang gia"
          />
        </div>
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

      <div className="container mt-10 lg:mt-[100px] flex lg:flex-row flex-col gap-10">
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