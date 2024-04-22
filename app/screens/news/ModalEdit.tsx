import api from "@/api/graphql";
import BaseButton from "@/components/common/BaseButton";
import CKEditor from "@/components/common/CKEditor";
import { imagesRenderUrl } from "@/utils";
import { Button, Form, Input, message, Select, Upload } from "antd";
import React from "react";

const ModalEdit = ({ item, onClose }: any) => {
  const defaultValue = {
    title: "",
    description: "",
    content: "",
    type: 1,
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
    image: "",
  };
  const [data, setData] = React.useState(defaultValue);
  const [image, setImage] = React.useState<any>();

  React.useEffect(() => {
    if (item) {
      setData({ ...item });
    } else {
      setData(defaultValue);
    }
  }, [item]);

  const onFinish = async () => {
    if (!data.title || !data.title.trim()) {
      return message.error("Vui lòng nhập Tiêu đề");
    }

    if (!data.content || !data.content.trim()) {
      return message.error("Vui lòng nhập content");
    }
    if (image?.[0]?.uid) {
      data.image = await imagesRenderUrl(image?.[0]);
    }
    const result = item
      ? await api.apiUpdateNew(data)
      : await api.apiCreateNew(data);

    if (result.data.status.code === 200) {
      message.success(item ? "Sửa thành công" : "Thêm thành công");
      onClose?.();
      setData(defaultValue);
    } else {
      message.error("Đã sảy ra lỗi");
    }
  };

  const onChange = (name: any, value: any) =>
    setData({ ...data, [name]: value });

  const onBeforeUploadBanner = (file: any) => {
    try {
      setImage([file]);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Form layout="vertical">
        <Form.Item>
          <Button onClick={() => document?.getElementById("image")?.click()}>
            Tải Ảnh Bìa
          </Button>
          <img
            src={
              image?.length
                ? (URL.createObjectURL(image?.[0]) as any)
                : data?.image || ""
            }
            alt=""
            className="object-cover rounded-2xl cursor-pointer w-[100%] h-[25vw] py-[20px]"
          />
        </Form.Item>
        <Form.Item label={"Loại bài viết"}>
          <Select
            onChange={(value) => onChange("type", Number(value))}
            value={data.type}
            options={[
              { label: "Blog", value: 1 },
              { label: "Tin nguồn", value: 2 },
              { label: "Chính sách", value: 3 },
              { label: "Tin nổi bật", value: 4 },
              { label: "Hướng dẫn", value: 5 },
              { label: "Biểu phí", value: 6 },
              { label: "Không hiển thị", value: 7 },
            ]}
          />
        </Form.Item>
        <Form.Item label={"Title"}>
          <Input
            onChange={(e: any) => onChange("title", e.target.value)}
            value={data.title}
          />
        </Form.Item>
        <Form.Item label={"Description"}>
          <Input.TextArea
            onChange={(e: any) => onChange("description", e.target.value)}
            value={data.description}
          />
        </Form.Item>
        <Form.Item label={"Meta Title"}>
          <Input.TextArea
            onChange={(e: any) => onChange("metaTitle", e.target.value)}
            value={data.metaTitle}
          />
        </Form.Item>
        <Form.Item label={"Meta Keywords"}>
          <Input.TextArea
            onChange={(e: any) => onChange("metaKeywords", e.target.value)}
            value={data.metaKeywords}
          />
        </Form.Item>
        <Form.Item label={"Meta Description"}>
          <Input.TextArea
            onChange={(e: any) => onChange("metaDescription", e.target.value)}
            value={data.metaDescription}
          />
        </Form.Item>

        <Form.Item label={"Content"}>
          <CKEditor
            value={data.content}
            onChange={(e: any) => onChange("content", e)}
          />
        </Form.Item>
      </Form>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <BaseButton onClick={onFinish}>{item ? "Lưu" : "Thêm"}</BaseButton>
      </div>
      <div style={{ display: "none" }}>
        <Upload
          accept={"image/png,image/webp,image/jpg,image/jpeg"}
          listType="picture-card"
          beforeUpload={onBeforeUploadBanner}
          onPreview={() => {}}
          id="image"
        >
          image
        </Upload>
      </div>
    </div>
  );
};

export default ModalEdit;
