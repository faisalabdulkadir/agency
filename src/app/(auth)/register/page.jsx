import styles from "./register.module.css";
import RegisterFormPage from "@/component/registerForm/registerFormPage";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterFormPage />
      </div>
    </div>
  );
};

export default RegisterPage;
