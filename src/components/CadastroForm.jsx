import Input from "./Input";
import Button from "./Button";
import ImagemLogo from "../assets/imagem_logo2.png";
import ImagemGoogle from "../assets/imagem_google.png";

export default function CadastroForm() {
    return (
        <form className="form-container">
            <div style={{position: 'relative', height: '200px', display: 'flex', justifyContent: 'center'}}>
            <img src={ImagemLogo} alt="imagem_logo" className="logoClass"/>
            </div>
            
            <h3 className="titulo">Cadastro</h3>
            <button className="google-btn" type="button"><img src={ImagemGoogle} alt="Imagem google" /></button>
            
            <div className="input-group">
                <label htmlFor="nome_completo">Nome Completo</label>
                <Input id="nome_completo" type="nome" placeholder=""/>
            </div>

            <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <Input id="email" type="email" placeholder="" />
            </div>

            <div className="input-group">
                <label htmlFor="Numero_Telefone">Número de Telefone</label>
                <Input id="Numero_Telefone" type="numero" placeholder=""/>
            </div>

            <div className="input-group">
                <label htmlFor="senha">Senha</label>
                <Input id="senha" type="password" placeholder="" />
            </div>
            
            <div className="input-group">
                <label htmlFor="Confirmar_Senha">Confirme a Senha</label>
                <Input id="Confirmar_Senha" type="password" placeholder="" />
            </div>

            <Button className="primary" type="submit">Criar Conta</Button>
            <p className="terms">Terms and Services</p>

        </form>
    );
}