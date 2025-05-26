import ImagemLogo from "../assets/imagem_logo2.png";
import ImagemUser from "../assets/foto_user.png";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navHome = () => {
    navigate('/Home_page');
  };
  const navHist = () => {
    navigate('/Historico');
  };
  const navFale = () => {
    navigate('/fale_conosco');
  };
  const navLaudos = () => {
    navigate('/laudos');
  };
  return (
        <header>
        <img src={ImagemLogo} alt="imagem_logo" style={{width: '22.67%', marginTop: '45px'}}/>
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "space-between", marginLeft: "60px" }}>
        
        {/* Menu centralizado */}
        <nav className="menu-links">
          <span onClick={navHome} className={location.pathname === '/Home_page' ? 'ativo' : ''}>Home</span>
          <span onClick={navLaudos} className={location.pathname === '/laudos' ? 'ativo' : ''}>Laudos</span>
          <span onClick={navHist} className={location.pathname === '/Historico' ? 'ativo' : ''}>Histórico</span>
          <span onClick={navFale} className={location.pathname === '/fale_conosco' ? 'ativo' : ''}>Fale Conosco</span>
        </nav>

        {/* Nome e imagem do usuário */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 className="nome_user">Nome do Usuário</h4>
          <img src={ImagemUser} alt="imagem do usuário" style={{ width: "80px" }} />
        </div>
        </div>
        </header>
  );
}