import { Breadcrumb, Button } from "antd";
import Link from "next/link";
import useAOS from "@/hooks/useAOS";
import api from "@/api/graphql";
import React from "react";
import NewItem from "@/screens/new/NewItem";
const Tutorial = () => {
  useAOS();
  const [dataNewPolicy, setDataNewPolicy] = React.useState<any>([]);

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(1);
  const getNewsPolicy = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 5, size: 9, page });

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
            title: <Link href={`/tutorial`}>Hướng dẫn</Link>,
          },
        ]}
      />
      <br />
      <br />
      <div style={{ minHeight: 600 }} className="news-list">
        {dataNewPolicy.map((value: any, index: any) => (
          <NewItem
            url="tutorial"
            className="news-item"
            item={value}
            key={index}
          />
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

export default Tutorial;
