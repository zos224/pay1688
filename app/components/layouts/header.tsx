import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider, Drawer, Menu, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "@/api/graphql";

export default function Header({ logo }: { logo?: any }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("mail");
  const router = useRouter();
  const [items, setItems] = React.useState([
    {
      label: "GIỚI THIỆU",
      key: "/",
    },
    {
      label: "DỊCH VỤ",
      key: "/service",
      // children: [],
    },
    {
      label: "BIỂU PHÍ",
      key: "/pricing",
    },
    {
      label: "CHÍNH SÁCH",
      key: "/policy",
      // children: [],
    },
    {
      label: "HƯỚNG DẪN",
      key: "/tutorial",
    },
    {
      label: "BLOG",
      key: "/blog",
    },
  ]);
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    router.push(e.key);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const getNewsC = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 3, size: 10, page: 1 });

      if (data.status.code === 200) {
        setItems((old: any) => {
          return old.map((val: any) => {
            if (val.key === "/policy") {
              return {
                ...val,
                children: data.data.map((item: any) => ({
                  label: item.title,
                  key: "/policy/" + item.id,
                })),
              };
            }
            return {
              ...val,
            };
          });
        });
      }
    } catch (error) {}
  };

  const getNewsP = async () => {
    try {
      const { data } = await api.apiGetNews({ type: 6, size: 10, page: 1 });

      if (data.status.code === 200) {
        setItems((old: any) => {
          return old.map((val: any) => {
            if (val.key === "/pricing") {
              return {
                ...val,
                children: data.data.map((item: any) => ({
                  label: item.title,
                  key: "/pricing/" + item.id,
                })),
              };
            }
            return {
              ...val,
            };
          });
        });
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    getNewsP();
    getNewsC();
  }, []);

  return (
    <header className="bg-blue-10 text-white fixed top-0 right-0 left-0 bg-opacity-50 z-20">
      <div className="container h-[68px] flex items-center justify-between">
        <div className="block lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="size-8"
            onClick={showDrawer}
          />
          <Drawer open={open} onClose={onClose}>
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    // itemColor: "white",
                    // horizontalItemSelectedColor: "white",
                  },
                },
              }}
            >
              <Menu
                className="bg-transparent text-white font-semibold"
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                items={items}
              />
            </ConfigProvider>
          </Drawer>
        </div>
        <div>
          <Link href={"/"}>
            <a>
              <img
                src={logo || ""}
                alt="logo"
                width={50}
                height={50}
                style={{ height: "50px", width: "auto" }}
              />
            </a>
          </Link>
        </div>
        <div className="max-lg:hidden">
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemColor: "white",
                  horizontalItemSelectedColor: "white",
                  fontSize: 19,
                },
              },
            }}
          >
            <Menu
              className="flex bg-transparent text-white font-semibold"
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </ConfigProvider>
        </div>

        <Link href="/login">
          <Button className="btn-orange flex items-center gap-2 text-[14px] h-[35px]">
            <FontAwesomeIcon icon={faUser} className="size-3" />
            Đăng nhập
          </Button>
        </Link>
      </div>
    </header>
  );
}
