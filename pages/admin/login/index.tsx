import Logo from "@/components/common/Logo";
import LoginForm from "@/screens/admin/auth/login";

const Login = () => {
  return (
    <div className="!mt-[60px] min-h-[50vh]" style={{ marginTop: 50 }}>
      <div className="h-fit lg:h-screen flex justify-center bg-[url('/images/bg-register.png')] bg-cover bg-no-repeat container m-auto">
        <div className="  mt-[60px] justify-start flex flex-col items-center  bg-white  flex-1 h-full lg:rounded-l-[50px] pt-[72px] px-10 lg:px-24 overflow-y-auto lg:overflow-hidden">
          <Logo />
          <div className="text-blue-10 text-center text-3xl lg:text-5xl font-semibold my-5 lg:mt-16">
            Đăng nhập
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
