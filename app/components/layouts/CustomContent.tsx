"use client";
import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;
type CustomContentProps = {
  children: React.ReactNode;
};
export default function CustomContent({ children }: CustomContentProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        // minHeight: "100vh",
        height: "calc(100vh - 120px)",
        overflowY: "auto",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {children}
    </Content>
  );
}
