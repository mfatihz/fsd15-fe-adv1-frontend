import { Link } from "react-router";

const FormLinks = ({ isLogin = true}) => {
  return (
    <div className="flex justify-between w-full text-sm text-gray-400 mt-3 max-sm:text-xs">
      {isLogin ?
      <>
      <p>
        <span>Belum punya akun?</span>{" "}
        <Link to="/register" className="text-white hover:underline hover:text-blue-500">Daftar</Link>
      </p>
      <Link to="/forgot-password" className="text-white hover:underline hover:text-blue-500">Lupa kata sandi?</Link>
      </>
      : <p>
        <span>Sudah punya akun?</span>{" "}
        <Link to="/login" className="text-white hover:underline hover:text-blue-500">Masuk</Link>
      </p> }
    </div>
  );
};

export default FormLinks;