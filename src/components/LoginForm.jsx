import Input from "./Input";
import Button from "./Button";
import ImageLogo from "../assets/imagem_logo.png";
import ImagemGoogle from "../assets/imagem_google.png";

export default function LoginForm() {
  return (
    <div className="form-container">
      <img src={ImageLogo} alt="Logo Laugo" className="logo-img" />
      <div className="input-group">
        <label for="email">E-mail</label>
        <Input id="E-mail" type="email" placeholder="Digite o seu e-mail" />
      </div>

      <div className="input-group">
        <label for="Senha">Senha</label>
        <Input id="Senha" type="password" placeholder="Digite sua senha" />
        <a href="#" className="forgot-password">Esqueceu sua senha?</a>
      </div>
      
      <Button className="primary">Acessar</Button>
      <Button className="secondary">Criar minha conta</Button>
      <button className="google-btn"><img src={ImagemGoogle} alt="Imagem google" /></button>
      <p className="terms">Terms and Services</p>
    </div>
  );
}