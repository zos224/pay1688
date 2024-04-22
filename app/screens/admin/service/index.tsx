import { typeServicePage, typeSettings } from "@/api/type/settings";
import useSettings from "@/hooks/useSettings";
import { Button, Form, Input, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
type typeProps = {
  setting: typeSettings;
};
const ServicePage = ({ setting }: typeProps) => {
  const { service } = setting || {};
  const [{ loading }, { handleSettings }] = useSettings();
  const [form] = Form.useForm();

  const [banner, setBanner] = useState<any>();

  const onBeforeUploadBanner = (file: any) => {
    try {
      setBanner([file]);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    if (setting?.service) {
      form.setFieldsValue(setting?.service);
    }
  }, [setting]);

  const renderValue = React.useCallback(
    (check: any, render: any) => {
      if (check) {
        return render;
      }
    },
    [service]
  );

  return (
    <div>
      <Form
        onFinish={(values: typeServicePage) => {
          if (banner?.length) {
            values.banner = banner[0];
          } else {
            if (service?.banner) {
              values.banner = service?.banner;
            }
          }

          // values.ecommerces =
          //   asValueTypeAny(values)?.ecommerces?.fileList || [];

          // console.log("values", values);
          // return;
          handleSettings?.createService(values, setting as any);
        }}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <div className="flex justify-end">
          <Button
            className="bg-blue-400"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Xác nhận
          </Button>
        </div>
        <div className="font-[500]">Banner</div>
        <Form.Item>
          <Button onClick={() => document?.getElementById("banner")?.click()}>
            Tải banner lên
          </Button>
          {(banner?.length || service?.banner) && (
            <img
              src={
                banner?.length
                  ? (URL.createObjectURL(banner[0]) as any)
                  : service?.banner || ""
              }
              alt=""
              className="object-cover rounded-2xl cursor-pointer w-[100%] h-[25vw] py-[20px]"
            />
          )}
        </Form.Item>

        <div className="font-[500] mt-4">Tiêu đề banner</div>
        <Form.Item name={"titleBanner"}>
          <Input placeholder="Tiêu đề ..." />
        </Form.Item>

        <div className="font-[500] mt-4">Mô tả banner</div>
        <Form.Item name={"descriptionBanner"}>
          <Input.TextArea rows={6} placeholder="Nhập ..." />
        </Form.Item>

        <div className="font-[500] mt-4">Đường dẫn banner</div>
        <Form.Item name={"urlBanner"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="my-[50px]">
          <div className="font-[500] my-4">
            Đặt hàng nhanh chóng và dễ dàng hơn
          </div>

          <div className="my-[50px]">
            <Form.List name={"orderShip"}>
              {(fields, { add, remove }) => (
                <div>
                  {fields.map((field, index) => (
                    <div className=" py-[15px] mb-1" key={index}>
                      <Form.Item name={[index, "logo"]} className="mt-2">
                        <Upload
                          defaultFileList={renderValue(
                            service?.orderShip[index] &&
                              service?.orderShip[index]?.logo,
                            [
                              {
                                name: service?.orderShip[index]?.logo,
                                url: service?.orderShip[index]?.logo,
                              },
                            ]
                          )}
                          listType="picture"
                        >
                          <Button>Chọn ảnh </Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name={[index, "title"]}>
                        <Input placeholder="nhập tiêu đề" />
                      </Form.Item>
                      <div className="my-[25px]">
                        <div className="font-[500] my-6">Danh sách</div>
                        <Form.List name={[index, "items"]}>
                          {(fields, { add, remove }) => (
                            <div>
                              {fields.map((field, i) => (
                                <div className=" py-[15px] mb-1 flex" key={i}>
                                  <Form.Item
                                    name={[i, "title"]}
                                    // className="min-w-[400px]"
                                  >
                                    <Input
                                      className="min-w-[400px]"
                                      placeholder="nhập nội dung"
                                    />
                                  </Form.Item>

                                  <Button
                                    onClick={() => remove(i)}
                                    className="!bg-[red] !text-white ml-3"
                                    type="dashed"
                                  >
                                    Xóa
                                  </Button>
                                </div>
                              ))}
                              <Form.Item>
                                <Button
                                  onClick={() => add()}
                                  style={{ width: "60%" }}
                                >
                                  Thêm
                                </Button>
                              </Form.Item>
                            </div>
                          )}
                        </Form.List>
                      </div>
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
        </div>

        <div className="font-[500] mt-4">
          Đường dẫn đặt hàng nhanh chóng và dễ dàng hơn
        </div>
        <Form.Item name={"orderShipUrl"}>
          <Input placeholder="Nhập ..." />
        </Form.Item>

        <div className="my-[50px]">
          <div className="font-[500] mt-4">Quy trình đặt hàng Trung Quốc</div>
          <Form.Item name={["processTq", "banner"]} className="mt-2">
            <Upload
              defaultFileList={renderValue(service?.processTq?.banner, [
                {
                  name: service?.processTq?.banner,
                  url: service?.processTq?.banner,
                },
              ])}
              listType="picture"
            >
              <Button>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
        </div>

        {/* // */}

        <div className="my-[50px]">
          <div className="font-[500] my-4">Hướng dẫn tìm kiếm nguồn hàng</div>

          <div className="my-[50px]">
            <Form.List name={"supportSearch"}>
              {(fields, { add, remove }) => (
                <div>
                  {fields.map((field, index) => (
                    <div className=" py-[15px] mb-1" key={index}>
                      <Form.Item name={[index, "logo"]} className="mt-2">
                        <Upload
                          defaultFileList={renderValue(
                            service?.supportSearch &&
                              service?.supportSearch[index] &&
                              service?.supportSearch[index]?.logo,
                            [
                              {
                                name:
                                  (service?.supportSearch &&
                                    service?.supportSearch[index] &&
                                    service?.supportSearch[index]?.logo) ||
                                  "",
                                url:
                                  (service?.supportSearch &&
                                    service?.supportSearch[index] &&
                                    service?.supportSearch[index]?.logo) ||
                                  "",
                              },
                            ]
                          )}
                          listType="picture"
                        >
                          <Button>Chọn ảnh </Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name={[index, "title"]}>
                        <Input placeholder="nhập tiêu đề" />
                      </Form.Item>
                      <Form.Item name={[index, "description"]}>
                        <Input.TextArea rows={5} placeholder="nhập tiêu đề" />
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
        </div>

        <div className="shadow-md my-6">
          <div className="font-[500] mt-4">
            Sẵn sàng hợp tác cùng chúng tôi?
          </div>
          <Form.Item name={["ourCooperate", "title"]}>
            <Input placeholder="Tiêu đề ..." />
          </Form.Item>
          <Form.Item name={["ourCooperate", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
          <div className="font-[500] mt-4">Đường dẫn</div>
          <Form.Item name={["ourCooperate", "url"]}>
            <Input placeholder="Nhập ..." />
          </Form.Item>
        </div>

        <div className="shadow-md my-6">
          <div className="font-[500] mt-4">
            Xu hướng nhập hàng Trung Quốc về Việt Nam để kinh doanh
          </div>
          <Form.Item name={["trendVn", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>

          <Form.Item name={["trendVn", "banner"]} className="mt-2">
            <Upload
              defaultFileList={renderValue(service?.trendVn?.banner, [
                {
                  name: service?.trendVn?.banner,
                  url: service?.trendVn?.banner,
                },
              ])}
              listType="picture"
            >
              <Button>Chọn ảnh </Button>
            </Upload>
          </Form.Item>
        </div>

        <div className="shadow-md my-6">
          <div className="font-[500] mt-4">
            Nguồn hàng nội địa Trung có chất lượng cao
          </div>
          <Form.Item name={["source", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>
        </div>

        <div className="shadow-md my-6">
          <div className="font-[500] mt-4">
            Thuận tiện trong việc giao thương, vận chuyển về Việt Nam
          </div>
          <Form.Item name={["ship", "description"]}>
            <Input.TextArea rows={6} placeholder="Mô tả ..." />
          </Form.Item>

          <Form.Item name={["ship", "url"]}>
            <Input placeholder="Đường dẫn ..." />
          </Form.Item>
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

        <Button
          className="bg-blue-400"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
          Xác nhận
        </Button>
      </Form>
    </div>
  );
};

export default ServicePage;
