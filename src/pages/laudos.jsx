import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import imagem from '../assets/fundoLaudos.png';

function Laudos () {
    const navigate = useNavigate();

    const navForm = () => {
        navigate('/formLaudo');
    };

    return (
        
        <div className="central" style={{width: '100%'}}>
            <Header/>
            <div style={{
            backgroundImage: `url(${imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            color: 'var(--color1)'
            }}>
                <h3 style={{fontSize: '2.4rem', fontWeight: '500'}}>Aqui você pode criar novos laudos do zero ou a partir dos seus modelos personalizados.</h3>
                <div style={{width: '40%', display: 'flex', justifyContent: 'space-between', marginBottom: '100px'}}>
                    <a onClick={navForm} className="linkLaudo">CRIAR NOVO LAUDO</a>
                    <a className="linkLaudo">MODELOS CRIADOS</a>
                </div>
            </div>
        </div>
        
    )
}

export default Laudos