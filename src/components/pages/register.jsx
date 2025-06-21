import AuthTemplate from "../templates/auth-template";
import RegisterForm from "../organisms/register-form";
import AuthHeader from "../molecules/auth-header";
import registerBg from '../../assets/images/background/register-bg.svg';//src/assets/images/background/register-bg.svg';

const Register = () => {
  return (
    <AuthTemplate bgImage={registerBg}>
      <AuthHeader title="Daftar" message="Selamat datang!"/>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default Register;
