import Input from "./Input";
import Button from "./Button";
import ImageLogo from "../assets/imagem_logo.png";

export default function LoginForm() {
  return (
    <div className="form-container">
      <img src={ImageLogo} alt="Logo Laugo" className="logo-img" />
      <Input label="E-mail" type="email" placeholder="Digite o seu e-mail" />
      <Input label="Senha" type="password" placeholder="Digite sua senha" />
      <a href="#" className="forgot-password">Esqueceu sua senha ?</a>
      <Button className="primary">Acessar</Button>
      <Button className="secondary">Criar minha conta</Button>
      <button className="google-btn">G</button>
      <p className="terms">Terms and Services</p>
    </div>
  );
}