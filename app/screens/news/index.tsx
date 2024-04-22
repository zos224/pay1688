"use client";

import BaseTable from "@/components/common/BaseTable";
import React from "react";

import api from "@/api/graphql";
import { Input, message, Modal } from "antd";
import BaseButton from "@/components/common/BaseButton";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

const News = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(1);
  const [itemValue, setItemvalue] = React.useState<any>(null);
  const [openModalAdd, setOpenModalAdd] = React.useState(false);
  const [openModalRd, setOpenModalRd] = React.useState(false);
  const getList = async () => {
    try {
      const { data } = await api.apiGetNews({ size: 10, page });

      if (data.status.code === 200) {
        setData(data.data);
        setTotal(Math.round(data.status.total));
      }
    } catch (error) {}
    setLoading(false);
  };
  React.useEffect(() => {
    getList();
  }, [page]);

  const onDelete = async () => {
    try {
      const { data } = await api.apiUpdateNew({
        id: itemValue.id,
        status: "remove",
      });

      if (data.status.code === 200) {
        message.success("Đã xóa thành công");
        getList();
        setOpenModalRd(false);
        setItemvalue(null);
      } else {
        message.error("Xóa thất bại");
      }
    } catch (error) {}
  };

  return (
    <div>
      <h1 style={{ fontWeight: "500", fontSize: "18px" }}>Tin tức</h1>
      <br />
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <div>
            <BaseButton onClick={() => setOpenModalAdd(true)}>Thêm</BaseButton>
          </div>
        </div>
        <br />
        <BaseTable
          onChangePageSize={(value) => setPage(value)}
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              key: "id",
            },
            {
              title: "Type",
              dataIndex: "type",
              key: "type",
              render: (val: any) => {
                if (val === 5) return "Hướng dẫn";
                if (val === 4) return "Tin nổi bật";
                if (val === 3) return "Chính sách";
                if (val === 2) return "Tin nguồn";
                return "Blog";
              },
            },
            {
              title: "Tiêu đề",
              dataIndex: "title",
              key: "title",
            },
            {
              title: "Ảnh bìa",
              dataIndex: "image",
              key: "image",
              width: 200,
              render: (item: any) => (
                <img src={item} style={{ height: "100px" }} />
              ),
            },
            {
              title: "Nội dung ngắn",
              dataIndex: "description",
              key: "description",
            },
            {
              title: "Thao tác",
              dataIndex: "action",
              key: "action",
              render: (item: any, value: any) => {
                return (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <BaseButton
                      onClick={() => {
                        setOpenModalRd(true);
                        setItemvalue(value);
                      }}
                      color="orange"
                    >
                      Xóa
                    </BaseButton>
                    <BaseButton
                      onClick={() => {
                        setItemvalue(value);
                        setOpenModalAdd(true);
                      }}
                    >
                      Sửa
                    </BaseButton>
                  </div>
                );
              },
              width: 130,
            },
          ]}
          page={page}
          size={10}
          total={total}
          dataSource={data}
        />
      </div>
      <Modal
        centered
        onCancel={() => {
          setOpenModalRd(false);
          setItemvalue(null);
        }}
        footer={null}
        open={openModalRd}
        title={"Xóa"}
      >
        <div>Bạn có chắc muốn xóa phần tử này không?</div>
        <br />
        <div>
          <BaseButton onClick={onDelete}>Chắc chắn, xóa</BaseButton>
        </div>
      </Modal>
      <Modal
        centered
        onCancel={() => {
          setOpenModalAdd(false);
          setItemvalue(null);
        }}
        className="modal-contact"
        width={800}
        footer={null}
        open={openModalAdd}
        title={itemValue ? "Chỉnh sửa" : "Thêm mới"}
      >
        {itemValue ? (
          <ModalEdit
            onClose={() => {
              setOpenModalAdd(false);
              setItemvalue(null);
              getList();
            }}
            item={itemValue}
          />
        ) : (
          <ModalAdd
            onClose={() => {
              setOpenModalAdd(false);
              setItemvalue(null);
              getList();
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default News;
