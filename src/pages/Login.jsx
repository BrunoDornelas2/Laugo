import LoginForm from "../components/LoginForm";
import styles from "../Login.module.css";
import ImageLogin from '../assets/imagem_garota_login.png' 

function Login() {
  return (
    <div className={styles["login-page"]}>
      <div className="left-panel">
        <img src={ImageLogin} alt="Ilustração" className={styles["yoga-img"]} />
      </div>
      <div className={styles["right-panel"]}>
        <LoginForm />
      </div>
    </div>
  );
}
export default Login