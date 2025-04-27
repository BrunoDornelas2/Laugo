import Input from "./Input";
import Button from "./Button";
import ImagemLogo from "../assets/imagem_logo2.png";

export default function SenhaForm() {
    return (
        <form className="form-container">
            <div style={{position: 'relative', height: '200px', display: 'flex', justifyContent: 'center'}}>
                <img src={ImagemLogo} alt="imagem_logo" className="logoClass"/>
            </div>
            <h3 className="titulo">Recuperação de Senha</h3>
            <div className="input-group">
                <label htmlFor="email2">E-mail</label>
                <Input id="email2" type="email" placeholder="" />
            </div>
            <div className="input-group">
                <label htmlFor="Numero_Telefone2">Número de Telefone</label>
                <Input id="Numero_Telefone2" type="numero" placeholder=""/>
            </div>
            <Button className="primary" type="submit">Enviar Senha de Recuperação</Button>
            <p className="terms">Terms and Services</p>
        </form>
    )
}