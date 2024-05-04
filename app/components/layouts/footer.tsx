import api from "@/api/graphql";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import BaseButton from "../common/BaseButton";

export default function Footer() {
  const [datas, setData] = React.useState<any>();
  const [bannerFooter, setBannerFooter] = React.useState<any>();
  const [logo, setLogo] = React.useState<any>();
  const [bct, setBCT] = React.useState<any>();
  const fetchApi = async () => {
    const { data } = await api.apiGetSetting({});
    setData(data?.data?.content?.home?.footer);
    setBannerFooter(data?.data?.content?.home?.bannerFooter || "");
    setLogo(data?.data?.content?.home?.logoWebsite);
    setBCT(data?.data?.content?.home?.bct);
  };

  React.useEffect(() => {
    fetchApi();
  }, []);
  return (
    <footer className="bg-blue-10 text-white">
      <div className="container pt-12 mb-12 lg:flex-row flex-col gap-20 border-b border-white text-white hidden">
        <div className="flex-1">
          <img src={logo} alt="logo" width={200} height={100} />
          <p className="mb-16 font-medium">{datas?.description || ""}</p>
          <BaseButton color="orange" href={datas?.url || ""} icon={faShoppingCart}>
            Tạo đơn đặt hàng
          </BaseButton>
        </div>
        <div className="flex-1">
          <img className="object-cover max-h-96 m-auto" src={bannerFooter || ""} alt="logo" />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pt-10">
        <div>
          <img src={logo} alt="logo" width={200} height={100} />
          <div className="flex gap-7 mt-8">
            <Link href={datas?.urlIn || ""} className="text-white">
              <FontAwesomeIcon icon={faLinkedinIn} className="size-7" />
            </Link>
            <Link href={datas?.urlTw || ""} className="text-white">
              <FontAwesomeIcon icon={faTwitter} className="size-7" />
            </Link>
            <Link href={datas?.urlface || ""} className="text-white">
              <FontAwesomeIcon icon={faFacebook} className="size-7" />
            </Link>
            <Link href={datas?.urlIs || ""} className="text-white">
              <FontAwesomeIcon icon={faInstagram} className="size-7" />
            </Link>
          </div>
          <img className="mt-5" src={bct} alt="bộ công thương" width={200} height={100}></img>
        </div>
        <div>
          <p className="mb-5 text-2xl font-semibold">Liên hệ chúng tôi</p>
          <p className="flex items-center gap-5 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="size-5" />
            <span>{datas?.contactAddress || ""}</span>
          </p>
          <p className="flex items-center gap-5 mb-2">
            <FontAwesomeIcon icon={faPhone} className="size-5" />
            <span>{datas?.contactNumber || ""}</span>
          </p>
          <p className="flex items-center gap-5">
            <FontAwesomeIcon icon={faEnvelope} className="size-5" />
            <span>{datas?.contactEmail || ""}</span>
          </p>
        </div>
        <div>
          <p className="mb-5 text-2xl font-semibold">Dịch vụ</p>
          {datas?.service || ""}
        </div>
        <div>
          <p className="mb-5 text-2xl font-semibold">Hỗ trợ</p>
          <p className="mb-2">Hỗ trợ</p>
          <p className="mb-2">Hướng dẫn tạo tài khoản</p>
          <p className="mb-2">Hướng dẫn tạo đơn hàng</p>
          <p className="mb-2">Tải tiện ích</p>
          <p className="mb-2">Chính sách</p>
          <p className="mb-2">Liên hệ</p>
        </div>
      </div>
      <div className="bg-text-blue-20 text-center py-4 text-white font-medium text-lg">
        Copyright © 2024 . Nhập hàng quốc tế
      </div>
    </footer>
  );
}
