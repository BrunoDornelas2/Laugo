import botao from "../assets/botao_menu.png";
import IconLaudo from "../assets/laudos_icon.png";
import IconHist from "../assets/historico_icon.png";
import FaleConosco from "../assets/fale_conosco_icon.png";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();
    
    const navHist = () => {
        navigate('/Historico');
    };

    return(
        <div className="central">
            <Header/>
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
                <a onClick={navHist}><img src={botao} alt="botão" style={{background: 'transparent', cursor: 'pointer'}}/></a>
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