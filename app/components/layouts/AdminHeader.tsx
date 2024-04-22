"use client";
import React, { useContext, useState } from "react";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import { reState } from "@/context";
import { setCookie } from "cookies-next";
import { DEFAULT_VARIABLE_COOKIES } from "@/utils/common";
const { Header } = Layout;
type AdminHeaderProps = {
  collapsed: boolean;
  toggleCollapsed: any;
};
export default function AdminHeader({
  collapsed,
  toggleCollapsed,
}: AdminHeaderProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { user, route } = useContext(reState);
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="flex justify-between items-center pr-2">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div>
          {user?.fullName || ""}
          {user ? (
            <Button
              onClick={() => {
                setCookie(DEFAULT_VARIABLE_COOKIES.token, "");
                route?.push("/admin/login");
              }}
            >
              Đăng xuất
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Header>
  );
}
