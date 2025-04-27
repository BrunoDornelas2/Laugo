import ImagemLogo from "../assets/imagem_logo2.png";
import ImagemUser from "../assets/foto_user.png";
import botao from "../assets/botao_menu.png";
import IconLaudo from "../assets/laudos_icon.png";
import IconHist from "../assets/historico_icon.png";
import FaleConosco from "../assets/fale_conosco_icon.png";

function Home () {
    return(
        <div className="central">
            <header>
            <img src={ImagemLogo} alt="imagem_logo" style={{width: '22.67%', marginTop: '45px'}}/>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <h4 className="nome_user">Nome do Usuário</h4>
            <img src={ImagemUser} alt="imagem do usuário" style={{width: '80px'}}/>
            </div>
            </header>
            <div className="menu">
            <div className="rota" style={{backgroundColor: 'var(--color9)'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '1rem', background: 'transparent', color: 'var(--color6)', fontWeight: 'bold'}}>Laudos</h3>
                <p style={{fontSize: '1.625rem', marginBottom: '3rem', color: 'var(--color6)'}}>Novos laudos, consulta e modelos.</p>
                <div className="central">
                <img src={IconLaudo} alt="Icon Laudos" style={{width: '41.66%', marginBottom: '2rem'}}/>
                <a><img src={botao} alt="botão" style={{background: 'transparent', cursor: 'pointer'}}/></a>
                </div>
            </div>
            <div className="rota" style={{backgroundColor: 'var(--color10)'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '1rem', background: 'transparent', color: 'var(--color6)', fontWeight: 'bold'}}>Históricos</h3>
                <p style={{fontSize: '1.625rem', marginBottom: '3rem', color: 'var(--color6)'}}>Todos os laudos criados.</p>
                <div className="central">
                <img src={IconHist} alt="Icon Histórico" style={{width: '52.27%', marginBottom: '2rem'}}/>
                <a><img src={botao} alt="botão" style={{background: 'transparent', cursor: 'pointer'}}/></a>
                </div>
            </div>
            <div className="rota" style={{backgroundColor: 'var(--color11)'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '1rem', background: 'transparent', color: 'var(--color6)', fontWeight: 'bold'}}>Fale Conosco</h3>
                <p style={{fontSize: '1.625rem', marginBottom: '3rem', color: 'var(--color6)'}}>Dúvidas, assistência técnica e informações.</p>
                <div className="central">
                <img src={FaleConosco} alt="Icon Fale Conosco" style={{width: '59.52%', marginBottom: '2rem'}}/>
                <a><img src={botao} alt="botão" style={{background: 'transparent', cursor: 'pointer'}}/></a>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Home