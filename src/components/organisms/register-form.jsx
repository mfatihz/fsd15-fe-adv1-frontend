import { useState } from "react";
import { useNavigate } from "react-router";
import InputWithLabel from "../molecules/input-with-label";
import PasswordField from "../molecules/password-field";
import FormLinks from "../molecules/form-links";
import Button from "../atoms/auth-button";
import GoogleButton from "../atoms/google-button";

const RegisterForm = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;

        // Validasi sederhana
        if (!username || !password || !confirmPassword) {
            setError("Username dan password dan konfirmasi password harus diisi\n\nHint:\nUsername = admin\nKata Sandi = admin");
            return;
        }

        // Simulasi register berhasil
        if (username === "admin" && password === "admin" && confirmPassword === "admin") {
            navigate("/login"); // Navigasi ke Login jika berhasil
        } else {
            setError("Username atau password atau konfirmasi password salah\n\nHint:\nUsername = admin\nKata Sandi = admin");
        }
    };

    return (
        <>
            <div className="flex flex-col items-start gap-1 w-full">
                <form 
                    id="login-form" 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 w-full"
                >
                    {error && alert(error)}
                    <InputWithLabel label="Username" type="text" id="username" placeholder="Masukkan username" />
                    <PasswordField />
                    <PasswordField name="confirm_password" placeholder="Masukkan ulang kata sandi" />
                </form>
                <FormLinks isLogin={false} />
            </div>

            <div className="flex flex-col gap-3">
                <Button type="submit" form="login-form" variant="primary">Daftar</Button>
                <p className="text-center text-gray-400 text-sm max-sm:text-xs">Atau</p>
                <GoogleButton>Daftar dengan Google</GoogleButton>
            </div>
        </>
    );
};

export default RegisterForm;