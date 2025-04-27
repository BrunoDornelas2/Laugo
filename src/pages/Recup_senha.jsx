import SenhaForm from "../components/SenhaForm";
import styles from "../Senha.module.css";
import ImagePassword from '../assets/password_image.png';

function Password() {
  return (
    <div className={styles["password-page"]}>
      <div className={styles["left-panel"]}>
        <img src={ImagePassword} alt="Ilustração" className={styles["image_senha"]} />
      </div>
      <div className={styles["right-panel"]}>
        <SenhaForm />
      </div>
    </div>
  );
}
export default Password