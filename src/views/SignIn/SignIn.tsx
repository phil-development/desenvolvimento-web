import React from "react";
import useSignIn from "../../hooks/useSignIn";
import { AuthForm, Popup } from "../../components/index";
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {

  const { t } = useTranslation();

  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signIn,
    showPopUp,
    handleClosePopUp,
  } = useSignIn();

  return (
    <div>
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

      {showPopUp && (
        <Popup
          isOpen={showPopUp}
          onClose={handleClosePopUp}
          title={t('popup.signInSuccess')}
          message={t('popup.signInRedirect')}
          autoCloseDuration={3000}
        />
      )}
    </div>
  );
};

export default SignIn;