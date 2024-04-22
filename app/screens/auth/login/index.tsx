import Logo from "@/components/common/Logo";
import { Form, Input, Checkbox, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Login = () => {
  return (
    <div className="h-fit lg:h-screen flex bg-[url('/images/bg-register.png')] bg-cover bg-no-repeat">
      <div className="relative w-1/2 hidden lg:block">
        <Button className="rounded-full top-[72px] left-[108px] absolute border border-white flex items-center justify-center size-10">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white"
          ></FontAwesomeIcon>
        </Button>
      </div>
      <div className="flex flex-col items-center justify-start bg-white  flex-1 h-full lg:rounded-l-[50px] pt-[72px] px-10 lg:px-24 overflow-y-auto lg:overflow-hidden">
        <Logo />
        <div className="text-blue-10 text-center text-3xl lg:text-6xl font-semibold mt-5 lg:mt-16">
          Đăng nhập
        </div>
        <div className="text-blue-10 my-7 text-center font-semibold">
          Đối tác vận chuyển uy tín của nhiều công ty hàng đầu Việt Nam
        </div>
        <Form>
          <Form.Item>
            <Input
              placeholder="Email hoặc số điện thoại"
              className="border border-blue-10 rounded-full px-[22px] py-[15px]"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              placeholder="Mật khẩu"
              className="border border-blue-10 rounded-full px-[22px] py-[15px]"
            />
          </Form.Item>
          <Form.Item>
            <div className="flex items-center justify-between">
              <Checkbox>Nhớ mật khẩu</Checkbox>
              <Link href="/forgot-password">Quên mật khẩu ?</Link>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              className="rounded-full w-full bg-blue-10 text-white font-bold "
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item className="text-center text-gray-10 ">
            Bạn không có tài khoản tại NhaphangQT?{" "}
            <Link href="/register" className="text-blue-10 font-bold">
              Đăng ký ngay
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
