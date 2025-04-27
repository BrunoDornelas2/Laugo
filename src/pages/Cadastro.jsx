import CadastroForm from "../components/CadastroForm";
import styles from "../Cadastro.module.css";
import ImageLogin from '../assets/imagem_garota_cadastro.png';

function Cadastro() {
    return (
        <div className={styles["cadastro-page"]}>
            <div className="left-panel"> 
                <img src={ImageLogin} alt="Ilustração cadastro" className={styles["estudo-img"]} />
            </div>

            <div className={styles["right-panel"]}>
                <CadastroForm />
            </div>
        </div>
    );
}

export default Cadastro;