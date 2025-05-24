import ImagemLogo from "../assets/imagem_logo2.png";
import ImagemUser from "../assets/foto_user.png";

export default function Header() {
  return (
        <header>
        <img src={ImagemLogo} alt="imagem_logo" style={{width: '22.67%', marginTop: '45px'}}/>
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "space-between", marginLeft: "60px" }}>
        
        {/* Menu centralizado */}
        <nav className="menu-links">
          <span>Home</span>
          <span>Laudos</span>
          <span className="ativo">Histórico</span>
          <span>Fale Conosco</span>
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