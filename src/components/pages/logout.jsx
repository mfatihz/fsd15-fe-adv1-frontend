import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth";

const Logout = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  onLogout();
  navigate('/login');
};

export default Logout;
