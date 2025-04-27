import Input from "./Input";
import Button from "./Button";
import ImageLogo from "../assets/imagem_logo.png";
import ImagemGoogle from "../assets/imagem_google.png";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const CriaConta = () => {
    navigate('/Cadastro');
  };
  const EsqueceuSenha = () => {
    navigate('/Recup_senha');
  };
  const Acessar = () => {
    navigate('/Home_page');
  };

  return (
    <form className="form-container">
      <img src={ImageLogo} alt="Logo da Laugo" className="logo-img" />
      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <Input id="email" type="email" placeholder="Digite o seu e-mail" />
      </div>

      <div className="input-group">
        <label htmlFor="senha">Senha</label>
        <Input id="senha" type="password" placeholder="Digite sua senha" />
        <a onClick={EsqueceuSenha} className="forgot-password">Esqueceu sua senha?</a>
      </div>
      
      <Button className="primary" type="submit" onClick={Acessar}>Acessar</Button>
      <Button className="secondary" type="button" onClick={CriaConta}>Criar minha conta</Button>
      <button type="button" className="google-btn"><img src={ImagemGoogle} alt="Logo da google" /></button>
      <p className="terms">Terms and Services</p>
    </form>
  );
}