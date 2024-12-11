import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";

const useSignUp = () => {
  const { supabase } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
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
    navigate("/signIn");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signUp,
    showPopUp,
    handleClosePopUp,
  };
};

export default useSignUp;