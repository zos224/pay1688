"use client";
import { Table } from "antd";
type BaseTableProps = {
  children?: React.ReactNode;
  columns: any;
  dataSource: any;
  page?: any,
  total?: any;
  size?: any
  onChangePageSize?: (value: any) => void
};

export default function BaseTable({
  children,
  columns,
  dataSource,
  page = 1,
  total = 10,
  size = 10,
  onChangePageSize
}: BaseTableProps) {
  return (
    <Table
      pagination={{ pageSize: size, total: total, onChange: onChangePageSize, current: page }}
      columns={columns}
      dataSource={dataSource}
    >
      {children && children}
    </Table>
  );
}
