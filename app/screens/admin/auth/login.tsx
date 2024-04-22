"use client";
import useAuth from "@/hooks/useAuth";
import { Button, Form, Input } from "antd";
type LoginFormProps = {};
export default function LoginForm({}: LoginFormProps) {
  const [{ loading }, { handleAuth }] = useAuth();
  const [form] = Form.useForm();

  return (
    <Form onFinish={handleAuth?.login} form={form}>
      <Form.Item
        name="account"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tài khoản",
          },
        ]}
      >
        <Input
          placeholder="Tên tài khoản"
          className="border border-blue-10 rounded-full px-[22px] py-[15px]"
        />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
          },
        ]}
      >
        <Input.Password
          placeholder="Mật khẩu"
          className="border border-blue-10 rounded-full px-[22px] py-[15px]"
        />
      </Form.Item>
      {/* <Form.Item>
            <div className="flex items-center justify-between">
              <Checkbox>Nhớ mật khẩu</Checkbox>
              <Link href="/forgot-password">Quên mật khẩu ?</Link>
            </div>
          </Form.Item> */}
      <Form.Item>
        <Button
          disabled={loading}
          loading={loading}
          htmlType="submit"
          className="rounded-full w-full bg-blue-10 text-white font-bold "
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}
