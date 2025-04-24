import LoginForm from "../components/LoginForm";
import "../Login.css";
import ImageLogin from '../assets/imagem_garota_login.png' 

export default function Login() {
  return (
    <div className="login-page">
      <div className="left-panel">
        <img src={ImageLogin} alt="Ilustração" className="yoga-img" />
      </div>
      <div className="right-panel">
        <LoginForm />
      </div>
    </div>
  );
}