import { typeHomePage, typeSettings } from "@/api/type/settings";
import useSettings from "@/hooks/useSettings";
import { asValueTypeAny } from "@/utils";
import { Button, Form, Input, Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
type typeProps = {
  setting: typeSettings;
};
const HomePage = ({ setting }: typeProps) => {
  const { home } = setting || {};
  const [{}, { handleSettings }] = useSettings();
  const [form] = Form.useForm();

  const [banner, setBanner] = useState<any>();
  const [favicon, setFavicon] = useState<any>();
  const [logoWebsite, setLogoWebsite] = useState<any>();
  const [bannerFooter, setBannerFooter] = useState<any>();

  const onBeforeUploadBanner = (file: any) => {
    try {
      setBanner([file]);
    } catch (error) {
      throw error;
    }
  };

  const onBeforeUploadBannerF = (file: any) => {
    try {
      setBannerFooter([file]);
    } catch (error) {
      throw error;
    }
  };

  const onBeforeUploadLogoW = (file: any) => {
    try {
      setLogoWebsite([file]);
    } catch (error) {
      throw error;
    }
  };

  const onBeforeUploadFavicon = (file: any) => {
    try {
      setFavicon([file]);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    if (setting?.home) {
      form.setFieldsValue(setting?.home);
    }
  }, [setting]);

  const renderValue = React.useCallback(
    (check: any, render: any) => {
      if (check) {
        return render;
      }
    },
    [home]
  );

  return (
    <div>
      <Form
        onFinish={(values: typeHomePage) => {
          if (banner?.length) {
            values.banner = banner[0];
          } else {
            if (home?.banner) {
              values.banner = home?.banner;
            }
          }

          values.ecommerces =
            asValueTypeAny(values)?.ecommerces?.fileList || [];

          if (favicon?.length) {
            values.favicon = favicon[0];
          } else {
            if (home?.favicon) {
              values.favicon = home?.favicon;
            }
          }

          if (logoWebsite?.length) {
            values.logoWebsite = logoWebsite[0];
          } else {
            if (home?.logoWebsite) {
              values.logoWebsite = home?.logoWebsite;
            }
          }

          if (bannerFooter?.length) {
            values.bannerFooter = bannerFooter[0];
          } else {
            if (home?.bannerFooter) {
              values.bannerFooter = home?.bannerFooter;
            }
          }

          handleSettings?.createHome(values, setting as any);
        }}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <div className="flex justify-end">
          <Button className="bg-blue-400" htmlType="submit">
            Xác nhận
          </Button>
        </div>
        <label className="font-[500]">Favicon</label>
        <Form.Item>
          <Button onClick={() => document?.getElementById("favicon")?.click()}>
            Tải Favicon Lên
          </Button>
          <img
            src={
              favicon?.length
                ? (URL.createObjectURL(favicon[0]) as any)
                : home?.favicon || ""
            }
            alt=""
            className="object-cover rounded-2xl cursor-pointer w-[200px] h-[200px] py-[20px]"
          />
        </Form.Item>
        <label className="font-[500]">Logo Website</label>
        <Form.Item>
          <Button
            onClick={() => document?.getElementById("logoWebsite")?.click()}
          >
            Tải Logo Lên
          </Button>
          <img
            src={
              logoWebsite?.length
                ? (URL.createObjectURL(logoWebsite[0]) as any)
                : (home as any)?.logoWebsite || ""
            }
            alt=""
            className="object-cover rounded-2xl cursor-pointer w-[200px] h-[200px] py-[20px]"
          />
        </Form.Item>
        <label className="font-[500]">Tên Website</label>
        <Form.Item name={"homeTitle"}>
          <Input placeholder="Tên Website" />
        </Form.Item>
        <label className="font-[500]">Giới thiệu Website</label>
        <Form.Item name={"homeDescription"}>
          <Input.TextArea rows={4} placeholder="Giới thiệu Website" />
        </Form.Item>
        <br />
        <hr />
        <br />
        <div className="font-[500]">Banner</div>
        <Form.Item>
          <Button onClick={() => document?.getElementById("banner")?.click()}>
            Tải banner lên
          </Button>
          {(banner?.length || home?.banner) && (
            <img
              src={
                banner?.length
                  ? (URL.createObjectURL(banner[0]) as any)
                  : home?.banner || ""
              }
              alt=""
              className="object-cover rounded-2xl cursor-pointer w-[100%] h-[25vw] py-[20px]"
            />
          )}
        </Form.Item>

        <div className="font-[500] mt-4">Tìm kiếm Url</div>
        <Form.Item name={"searchUrl"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="font-[500] mt-4">Url Đăng nhập</div>
        <Form.Item name={"urlDangNhap"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>


        <div className="font-[500] mt-4">Url Đăng ký</div>
        <Form.Item name={"urlDangKy"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="mt-3 shadow-lg py-2 px-2">
          <div className="font-[500] my-4">Kí gửi hảng TQ - VN</div>

          <Form.Item name={["depositTqVn", "logo"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.depositTqVn?.logo, [
                {
                  url: home?.depositTqVn?.logo,
                  name: home?.depositTqVn?.logo,
                },
              ])}
            >
              <Button>Chọn logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item name={["depositTqVn", "title"]}>
            <Input placeholder="Tiêu đề ..." />
          </Form.Item>
          <Form.Item name={["depositTqVn", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
          <Form.Item name={["depositTqVn", "url"]}>
            <Input placeholder="Đường dẫn ..." />
          </Form.Item>
        </div>

        {/* // */}

        <div className="mt-3 shadow-lg py-2 px-2">
          <div className="font-[500] my-4">Kí gửi hảng VN - TQ</div>

          <Form.Item name={["depositVnTq", "logo"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.depositVnTq?.logo, [
                {
                  url: home?.depositVnTq?.logo,
                  name: home?.depositVnTq?.logo,
                },
              ])}
            >
              <Button>Chọn logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item name={["depositVnTq", "title"]}>
            <Input placeholder="Tiêu đề ..." />
          </Form.Item>
          <Form.Item name={["depositVnTq", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
          <Form.Item name={["depositVnTq", "url"]}>
            <Input placeholder="Đường dẫn ..." />
          </Form.Item>
        </div>

        {/* Nhập khẩu chính ngạch */}
        <div className="mt-3 shadow-lg py-2 px-2">
          <div className="font-[500] my-4">Nhập khẩu chính ngạch</div>

          <Form.Item name={["nhapKhauChinhNgach", "logo"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.nhapKhauChinhNgach?.logo, [
                {
                  url: home?.nhapKhauChinhNgach?.logo,
                  name: home?.nhapKhauChinhNgach?.logo,
                },
              ])}
            >
              <Button>Chọn logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item name={["nhapKhauChinhNgach", "title"]}>
            <Input placeholder="Tiêu đề ..." />
          </Form.Item>
          <Form.Item name={["nhapKhauChinhNgach", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
          <Form.Item name={["nhapKhauChinhNgach", "url"]}>
            <Input placeholder="Đường dẫn ..." />
          </Form.Item>
        </div>

        <div className="font-[500] mt-4">Url tính cước vận chuyển</div>
        <Form.Item name={"calculateShippingChargeUrl"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="font-[500] mt-4">Url tra cứu tỉ giá</div>
        <Form.Item name={"lookUpThePriceUrl"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="font-[500] mt-4">Url tra cứu vận đơn</div>
        <Form.Item name={"lookUpBillUrl"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title7">
              <Input placeholder="Tiếp cận nguồn hàng từ các sàn thương mại điện tử lớn nhất thế giới" />
            </Form.Item>
          </div>
          <Form.Item name={"ecommerces"} className="mt-5">
            <Upload
              listType="picture"
              multiple
              defaultFileList={renderValue(
                home?.ecommerces?.length,
                home?.ecommerces?.map((item: string) => {
                  return {
                    url:  item,
                    name: item
                  };
                })
              )}
            >
              <Button>Chọn nhiều logo thương hiệu</Button>
            </Upload>
          </Form.Item>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title8">
              <Input placeholder="Dịch vụ thanh toán hộ - Chuyển tiền sang Trung Quốc" />
            </Form.Item>
          </div>
          <Form.Item name={["paymentService", "banner"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.paymentService?.banner, [
                {
                  name: home?.paymentService?.banner,
                  url: home?.paymentService?.banner,
                },
              ])}
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>

          <Form.Item name={["paymentService", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
          <Form.Item name={["paymentService", "url"]}>
            <Input placeholder="Đường dẫn ..." />
          </Form.Item>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title9">
              <Input placeholder="Dịch vụ ký gửi hàng Trung Quốc uy tín, giá rẻ" />
            </Form.Item>
          </div>

          <Form.Item name={["depositService", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
          <Form.Item name={["depositService", "url"]}>
            <Input placeholder="Đường dẫn ..." />
          </Form.Item>
          <Form.Item name={["depositService", "image"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.depositService?.image, [
                {
                  name: home?.depositService?.image,
                  url: home?.depositService?.image,
                },
              ])}
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title">
              <Input placeholder="Quy trình ký gửi hàng" />
            </Form.Item>
          </div>
          <Form.Item name={["depositProcess", "banner"]} className="mt-2">
            <Upload
              defaultFileList={renderValue(home?.depositProcess?.banner, [
                {
                  name: home?.depositProcess?.banner,
                  url: home?.depositProcess?.banner,
                },
              ])}
              listType="picture"
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>
          <Form.Item name={["depositProcess", "url"]}>
            <Input placeholder="nhập đường dẫn" />
          </Form.Item>

          <div className="font-[500] mt-4">Các bước</div>
          <Form.List name={["depositProcess", "step"]}>
            {(fields, { add, remove }) => (
              <div>
                {fields.map((field, index) => (
                  <div className=" py-[15px] mb-1" key={index}>
                    <Form.Item name={[index, "title"]}>
                      <Input placeholder="nhập tên" />
                    </Form.Item>
                    <Form.Item name={[index, "description"]}>
                      <Input.TextArea rows={5} placeholder="nhập nội dung" />
                    </Form.Item>
                    <Button
                      onClick={() => remove(index)}
                      className="!bg-[red] !text-white"
                      type="dashed"
                    >
                      Xóa
                    </Button>
                  </div>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} style={{ width: "60%" }}>
                    Thêm
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title2">
              <Input placeholder="Quản lý tài chính minh bạch" />
            </Form.Item>
          </div>
          <Form.Item name={["financialManagement", "banner"]} className="mt-2">
            <Upload
              defaultFileList={renderValue(home?.financialManagement?.banner, [
                {
                  name: home?.financialManagement?.banner,
                  url: home?.financialManagement?.banner,
                },
              ])}
              listType="picture"
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>
          <Form.Item name={["financialManagement", "description"]}>
            <Input.TextArea rows={5} placeholder="nhập nội dung" />
          </Form.Item>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title3">
              <Input placeholder="Quản lý đơn hàng nhanh chóng" />
            </Form.Item>
          </div>
          <Form.Item name={["orderManage", "banner"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.orderManage?.banner, [
                {
                  name: home?.orderManage?.banner,
                  url: home?.orderManage?.banner,
                },
              ])}
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>

          <Form.Item name={["orderManage", "url"]}>
            <Input placeholder="nhập đường dẫn" />
          </Form.Item>

          <div className="font-[500] mt-4">Mô tả</div>
          <Form.List name={["orderManage", "itemOrder"]}>
            {(fields: any[], { add, remove }: any) => (
              <div>
                {fields.map((field, index) => (
                  <div className=" py-[15px] mb-1" key={index}>
                    <Form.Item name={[index, "title"]}>
                      <Input placeholder="nhập tên" />
                    </Form.Item>
                    <Form.Item name={[index, "description"]}>
                      <Input.TextArea rows={5} placeholder="nhập nội dung" />
                    </Form.Item>
                    <Button
                      onClick={() => remove(index)}
                      className="!bg-[red] !text-white"
                      type="dashed"
                    >
                      Xóa
                    </Button>
                  </div>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} style={{ width: "60%" }}>
                    Thêm
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title4">
              <Input placeholder="Lí do nên sử dụng dịch vụ thanh toán hộ tại NhaphangQT" />
            </Form.Item>
          </div>
          <Form.Item name={["reasonsPayment", "banner"]} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.reasonsPayment?.banner, [
                {
                  name: home?.reasonsPayment?.banner,
                  url: home?.reasonsPayment?.banner,
                },
              ])}
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>
          <Form.List name={["reasonsPayment", "title"]}>
            {(fields: any[], { add, remove }) => (
              <div>
                {fields.map((field, index) => (
                  <div className=" py-[15px] mb-1" key={index}>
                    <Form.Item name={[index]}>
                      <Input placeholder="nhập nội dung" />
                    </Form.Item>
                    <Button
                      onClick={() => remove(index)}
                      className="!bg-[red] !text-white"
                      type="dashed"
                    >
                      Xóa
                    </Button>
                  </div>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} style={{ width: "60%" }}>
                    Thêm
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>

        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title5">
              <Input placeholder="Sẵn sàng hợp tác cùng chúng tôi?" />
            </Form.Item>
          </div>
          <Form.Item name={"cooperateWithUs"} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.cooperateWithUs, [
                {
                  name: home?.cooperateWithUs,
                  url: home?.cooperateWithUs,
                },
              ])}
            >
              <Button>Chọn ảnh nền</Button>
            </Upload>
          </Form.Item>
        </div>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title6">
              <Input placeholder="Đối tác vận chuyển uy tín của nhiều công ty hàng đầu Việt Nam" />
            </Form.Item>
          </div>
          <Form.Item name={["partner", "description"]}>
            <Input.TextArea rows={5} placeholder="nhập nội dung" />
          </Form.Item>
          <Form.Item name={["partner", "url"]}>
            <Input placeholder="nhập url" />
          </Form.Item>
        </div>

        <br />
        <br />
        <hr />
        <br />
        <br />
        <h1>Foooter</h1>
        <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item label="Domain" name={["footer", "domain"]}>
              <Input placeholder="Domain" />
            </Form.Item>
          </div>
          <Form.Item label="Nội dung ngắn" name={["footer", "description"]}>
            <Input.TextArea rows={5} placeholder="Nhập nội dung" />
          </Form.Item>
          <Form.Item label="Url Tạo dơn hàng" name={["footer", "url"]}>
            <Input placeholder="Nhập url" />
          </Form.Item>
          <hr />
          <br />
          <Form.Item
            label="Contact Address"
            name={["footer", "contactAddress"]}
          >
            <Input placeholder="Nhập text" />
          </Form.Item>
          <Form.Item label="Contact Numbers" name={["footer", "contactNumber"]}>
            <Input placeholder="Nhập text" />
          </Form.Item>
          <Form.Item label="Contact Emails" name={["footer", "contactEmail"]}>
            <Input placeholder="Nhập text" />
          </Form.Item>
          <hr />
          <br />
          <Form.Item name={"bct"} className="mt-2">
            <Upload
              listType="picture"
              defaultFileList={renderValue(home?.bct, [
                {
                  name: home?.bct,
                  url: home?.bct,
                },
              ])}
            >
              <Button>Chọn ảnh bộ công thương</Button>
            </Upload>
          </Form.Item>
          <div className="font-[500] my-4">Hỗ trợ</div>
          <Form.List name={["supportFooter"]}>
            
            {(fields: any[], { add, remove }) => (
              <div>
                {fields.map((field, index) => (
                  <div className=" py-[15px] mb-1" key={index}>
                    <Form.Item name={[index, "title"]}>
                      <Input placeholder="nhập nội dung" />
                    </Form.Item>
                    <Form.Item name={[index, "url"]}>
                      <Input placeholder="nhập url" />
                    </Form.Item>
                    <Button
                      onClick={() => remove(index)}
                      className="!bg-[red] !text-white"
                      type="dashed"
                    >
                      Xóa
                    </Button>
                  </div>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} style={{ width: "60%" }}>
                    Thêm
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
          <hr />
          <br />
          <Form.Item label="Url In" name={["footer", "urlIn"]}>
            <Input.TextArea placeholder="Nhập text" />
          </Form.Item>
          <Form.Item label="Url X" name={["footer", "urlTw"]}>
            <Input.TextArea placeholder="Nhập text" />
          </Form.Item>
          <Form.Item label="Url Facebook" name={["footer", "urlface"]}>
            <Input.TextArea placeholder="Nhập text" />
          </Form.Item>
          <Form.Item label="Url Instagram" name={["footer", "urlIs"]}>
            <Input.TextArea placeholder="Nhập text" />
          </Form.Item>
          <div className="my-[50px]">
          <div className="font-[500] mt-4">
            <Form.Item name="title5">
              <Input placeholder="Sẵn sàng hợp tác cùng chúng tôi?" />
            </Form.Item>
          </div>
          
        </div>
          <hr />
          <br />
          <label className="font-[500]">Logo Website</label>
          <Form.Item label="Banner Footer">
            <Button
              onClick={() => document?.getElementById("bannerFooter")?.click()}
            >
              Tải Banner
            </Button>
            <img
              src={
                bannerFooter?.length
                  ? (URL.createObjectURL(bannerFooter[0]) as any)
                  : (home as any)?.bannerFooter || ""
              }
              alt=""
              className="object-cover rounded-2xl cursor-pointer w-[350px] h-[150px] py-[20px]"
            />
          </Form.Item>
        </div>

        <div style={{ display: "none" }}>
          <ImgCrop rotationSlider aspect={6 / 4}>
            <Upload
              accept={"image/png,image/webp,image/jpg,image/jpeg"}
              listType="picture-card"
              beforeUpload={(file) => onBeforeUploadBannerF(file)}
              onPreview={() => {}}
              id="bannerFooter"
            >
              Avatar
            </Upload>
          </ImgCrop>
        </div>

        <div style={{ display: "none" }}>
          <ImgCrop rotationSlider aspect={6 / 4}>
            <Upload
              accept={"image/png,image/webp,image/jpg,image/jpeg"}
              listType="picture-card"
              beforeUpload={(file) => onBeforeUploadBanner(file)}
              onPreview={() => {}}
              id="banner"
            >
              Avatar
            </Upload>
          </ImgCrop>
        </div>

        <div style={{ display: "none" }}>
          <Upload
            accept={"image/png"}
            listType="picture-card"
            beforeUpload={onBeforeUploadFavicon}
            onPreview={() => {}}
            id="favicon"
          >
            Favicon
          </Upload>
        </div>

        <div style={{ display: "none" }}>
          <Upload
            accept={"image/png"}
            listType="picture-card"
            beforeUpload={onBeforeUploadLogoW}
            onPreview={() => {}}
            id="logoWebsite"
          >
            Favicon
          </Upload>
        </div>

        <Button className="bg-blue-400" htmlType="submit">
          Xác nhận
        </Button>
      </Form>
    </div>
  );
};

export default HomePage;
