import Input from "./Input";
import Button from "./Button";
import ImagemLogo from "../assets/imagem_logo2.png";
import ImagemGoogle from "../assets/imagem_google.png";

export default function CadastroForm() {
    return (
        <div className="form-container">
            <img src={ImagemLogo} alt="imagem_logo" className="logo2-img"/>
            <p className="cadastro">Cadastro</p>
            <button className="google-btn"><img src={ImagemGoogle} alt="Imagem google" /></button>
            
            <div className="input-group">
                <label for="nome completo">Nome Completo</label>
                <Input id="Nome_Completo" type="nome" placeholder=""/>
            </div>

            <div className="input-group">
                <label for="email">E-mail</label>
                <Input id="E-mail" type="email" placeholder="" />
            </div>

            <div className="input-group">
                <label for="Numero de Telefone">Número de Telefone</label>
                <Input id="Numero_telefone" type="numero" placeholder=""/>
            </div>

            <div className="input-group">
                <label for="Senha">Senha</label>
                <Input id="Senha" type="password" placeholder="" />
            </div>
            
            <div className="input-group">
                <label for="Confirmar Senha">Confirme a Senha</label>
                <Input id="Confirmar_Senha" type="password" placeholder="" />
            </div>

            <Button className="primary">Criar Conta</Button>
            <p className="terms">Terms and Services</p>

        </div>
    );
}