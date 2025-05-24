import ImagemLogo from "../assets/imagem_logo2.png";
import ImagemUser from "../assets/foto_user.png";

export default function Header() {
  return (
        <header>
        <img src={ImagemLogo} alt="imagem_logo" style={{width: '22.67%', marginTop: '45px'}}/>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h4 className="nome_user">Nome do Usuário</h4>
        <img src={ImagemUser} alt="imagem do usuário" style={{width: '80px'}}/>
        </div>
        </header>
  );
}