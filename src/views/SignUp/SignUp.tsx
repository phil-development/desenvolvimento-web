import React from "react";
import useSignUp from "../../hooks/useSignUp";
import { AuthForm, Popup } from "../../components/";
import { useTranslation } from 'react-i18next';

const SignUp: React.FC = () => {

  const { t } = useTranslation();

  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signUp,
    showPopUp,
    handleClosePopUp,
  } = useSignUp();


  
  return (
    <div>
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

      {showPopUp && (
        <Popup
          isOpen={showPopUp}
          onClose={handleClosePopUp}
          title={t('popup.signUpSuccess')}
          message={t('popup.signUpConfirm')}
          autoCloseDuration={5000}
        />
      )}
    </div>
  );
};

export default SignUp;