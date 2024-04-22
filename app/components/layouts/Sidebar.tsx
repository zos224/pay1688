import useAuth from "@/hooks/useAuth";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import React from "react";
const { Sider } = Layout;
type SidebarProps = {
  collapsed: boolean;
};
export default function Sidebar({ collapsed }: SidebarProps) {
  const [{}, { handleAuth }] = useAuth();
  const router = useRouter();

  const pathName = React.useMemo(() => {
    if (router?.asPath) {
      return router.asPath;
    }
    return "";
  }, [router?.asPath]);

  const handleClick = (e: any) => {
    router.push(e.key.toString());
  };

  React.useEffect(() => {
    handleAuth?.getUser({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      width={250}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathName]}
        defaultSelectedKeys={["/admin/home"]}
        defaultValue={["/admin/home"]}
        onClick={handleClick}
        items={[
          {
            key: "/admin",
            label: "Cấu hình Website",
          },

          {
            key: "/admin/service",
            label: "Dịch vụ",
          },
          {
            key: "/admin/new",
            label: "Bài viết",
          },
        ]}
      />
    </Sider>
  );
}
