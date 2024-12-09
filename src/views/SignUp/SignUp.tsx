import React from "react";
import useSignUp from "../../hooks/useSignUp";
import AuthForm from "../../components/AuthForm/AuthForm";

const SignUp: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signUp,
  } = useSignUp();

  return (
    <AuthForm
      titleKey="signUp.title"
      submitTextKey="signUp.signUp"
      linkTo="/signIn"
      linkTextKey="signUp.alreadyHaveAccount"
      onSubmit={signUp}
      error={error ? `signUp.errors.${error}` : null}
      loading={loading}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default SignUp;