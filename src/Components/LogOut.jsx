import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove user token and other data from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    // Redirect to the login page
    navigate("/SignIn");
  }, []);

  return null;
}
