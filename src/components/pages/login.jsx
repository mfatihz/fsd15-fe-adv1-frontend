import AuthTemplate from "../templates/auth-template";
import LoginForm from "../organisms/login-form";
import AuthHeader from "../molecules/auth-header";
import loginBg from '../../assets/images/background/login-bg.svg';

const Login = () => {
  return (
    <AuthTemplate bgImage={loginBg}>
      <AuthHeader title="Masuk" message="Selamat datang kembali!"/>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;
