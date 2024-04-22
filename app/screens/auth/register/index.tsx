import Logo from "@/components/common/Logo";
import { Form, Input, Checkbox, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Register = () => {
  return (
    <div className="h-fit lg:h-screen flex bg-[url('/images/bg-register.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-start bg-white  flex-1 h-full lg:rounded-r-[50px]  px-10 lg:px-24 py-4 lg:pt-[72px] overflow-y-auto ">
        <Logo />
        <div className="text-blue-10 text-center text-3xl lg:text-6xl font-semibold mt-5 lg:mt-10">
          Đăng ký
        </div>
        <div className="text-blue-10 my-7 text-center font-semibold">
          Tiếp cận với công xưởng sản xuất lớn nhất thế giới hiện tại, rất nhiều
          hàng hóa đang chờ bạn!
        </div>
        <Form>
          <Form.Item>
            <Input
              placeholder="User đăng nhập"
              className="border border-blue-10 rounded-full px-[22px] py-[15px]"
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Họ và tên"
              className="border border-blue-10 rounded-full px-[22px] py-[15px]"
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Số điện thoại"
              className="border border-blue-10 rounded-full px-[22px] py-[15px]"
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Email"
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
            <Checkbox>
              Tôi đã đọc, hiểu và đồng ý với các{" "}
              <Link href="/" className="text-blue-10">
                Điều khoản & Điều kiện của NhaphangQT
              </Link>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              className="rounded-full w-full bg-blue-10 text-white font-bold "
            >
              Đăng ký
            </Button>
          </Form.Item>
          <Form.Item className="text-center text-gray-10 ">
            Bạn đã có tài khoản tại NhaphangQT?{" "}
            <Link href="/login" className="text-blue-10 font-bold">
              Đăng nhập ngay
            </Link>
          </Form.Item>
        </Form>
      </div>
      <div className="relative flex-1 hidden lg:block">
        <Button className="rounded-full top-[72px] right-[108px] absolute border border-white flex items-center justify-center size-10">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white"
          ></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};
export default Register;
