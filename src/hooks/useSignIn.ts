import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";

const useSignIn = () => {
  const { supabase } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        localStorage.setItem(
          "supabase.auth.token",
          JSON.stringify(data.session?.access_token),
        );
        setShowPopUp(true);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
    navigate("/");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signIn,
    showPopUp,
    handleClosePopUp,
  };
};

export default useSignIn;