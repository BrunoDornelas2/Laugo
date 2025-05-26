import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

function Laudos () {
    const navigate = useNavigate();

    const navForm = () => {
        navigate('/formLaudo');
    };

    return (
        <div className="central">
            <Header/>
            <div>
                <a onClick={navForm}>EDITOR</a>
            </div>
        </div>
    )
}

export default Laudos