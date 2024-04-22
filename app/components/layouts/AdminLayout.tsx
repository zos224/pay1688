"use client";
import { Layout, theme } from "antd";
import { useState } from "react";
import CustomContent from "./CustomContent";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
const { Sider } = Layout;
type AdminLayoutProps = {
  children: React.ReactNode;
};
export default function AdminLayout({ children }: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <AdminHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <CustomContent>{children}</CustomContent>
      </Layout>
    </Layout>
  );
}
