import { Link } from "react-router";
// TODO: perlu useLocation

const UnderDevelopment = ({ to="/", children = "Kembali ke Beranda", tag="", header="" }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                {header && header}
                <h1 className="text-2xl mb-4">Halaman {tag} sedang dalam pengembangan</h1>
                <Link 
                    to={to} 
                    className="text-blue-500 hover:underline"
                >
                    {children}
                </Link>
            </div>
        </div>
    );
};

export default UnderDevelopment;