import { useState } from "react";
import Label from "../atoms/auth-label";
import Input from "../atoms/auth-input";
import EyeIcon from "../atoms/eye-icon";

const PasswordField = ({name="password", placeholder="Masukkan kata sandi"}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <Label>Kata Sandi</Label>
      <div className="relative w-full">
        <Input
          type={showPassword ? "text" : "password"}
          id={ name }
          name={ name }
          className="pr-10"
          placeholder={ placeholder }
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition cursor-pointer focus:outline-none"
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
