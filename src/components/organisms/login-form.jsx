import { useState } from "react";
import InputWithLabel from "../molecules/input-with-label";
import PasswordField from "../molecules/password-field";
import FormLinks from "../molecules/form-links";
import Button from "../atoms/auth-button";
import GoogleButton from "../atoms/google-button";
import { useAuth } from "../../hooks/auth";

const LoginForm = () => {
    const [error, setError] = useState("");
    const { onLogin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Validasi sederhana
        if (!username || !password) {
            setError("Username dan password harus diisi\n\nHint:\nUsername = admin\nKata Sandi = admin");
            return;
        }

        // Simulasi login berhasil
        if (username === "admin" && password === "admin") {
            // navigate("/"); // Navigasi ke Home jika berhasil
            onLogin();
        } else {
            setError("Username atau password salah\n\nHint:\nUsername = admin\nKata Sandi = admin");
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
                    <InputWithLabel label="Username" type="text" id="username" name="username" placeholder="Masukkan username" />
                    <PasswordField />
                </form>
                <FormLinks />
            </div>

            <div className="flex flex-col gap-3">
                <Button type="submit" form="login-form" variant="primary" >Masuk</Button>
                <p className="text-center text-gray-400 text-sm max-sm:text-xs">Atau</p>
                <GoogleButton />
            </div>
        </>
    );
};

export default LoginForm;