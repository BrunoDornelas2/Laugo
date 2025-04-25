import CadastroForm from "../components/CadastroForm";
import "../Cadastro.css";
import ImageLogin from '../assets/imagem_garota_cadastro.png' 

export default function Cadastro() {
    return (
        <div className="cadastro-page">
            <div className="left-panel">
                <img src={ImageLogin} alt="Ilustraçao cadastro" className="estudo-img" />
            </div>

            <div className="right-panel">
                <CadastroForm/>
            </div>
        </div>
    );
}