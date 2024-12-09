import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Input, Button } from "..";
import { AppContext } from "../../Context";
import styles from "./AuthForm.module.scss";

interface AuthFormProps {
  titleKey: string;
  submitTextKey: string;
  linkTo: string;
  linkTextKey: string;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
  loading: boolean;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  titleKey,
  submitTextKey,
  linkTo,
  linkTextKey,
  onSubmit,
  error,
  loading,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const { t } = useTranslation();
  const { language } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className={styles.title}>{t(titleKey)}</h1>
        <Input
          label={t("signIn.email")}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          language={language}
        />
        <Input
          label={t("signIn.password")}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          language={language}
        />
        {error && <div className={styles.error}>{t(error)}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? t("loading") : t(submitTextKey)}
        </Button>
        <Link to={linkTo} className={styles.link}>
          {t(linkTextKey)}
        </Link>
      </form>
    </div>
  );
};

export default AuthForm;