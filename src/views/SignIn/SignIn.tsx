import React from "react";
import useSignIn from "../../hooks/useSignIn";
import AuthForm from "../../components/AuthForm/AuthForm";

const SignIn: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signIn,
  } = useSignIn();

  return (
    <AuthForm
      titleKey="signIn.title"
      submitTextKey="signIn.signIn"
      linkTo="/signUp"
      linkTextKey="signIn.noAccount"
      onSubmit={signIn}
      error={error ? `signIn.errors.${error}` : null}
      loading={loading}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default SignIn;