import Header from "../components/Header";
import iconeRX from "../assets/icone_rx.png";
import iconeUSG from "../assets/icone_usg.png";
import { useState } from "react";
import laudoLuna from "../assets/laudo_luna.png";
import laudoZoe from "../assets/laudo_zoe.png";


function Historico () {

    const laudos = [
        { data: "05/04/2025", paciente: "Luna", tipo: "RX", imagem: laudoLuna },
        { data: "05/04/2025", paciente: "Zoe", tipo: "USG", imagem: laudoZoe },
        { data: "05/04/2025", paciente: "Bruce", tipo: "USG" },
        { data: "05/04/2025", paciente: "Toddynho", tipo: "USG" },
        { data: "05/04/2025", paciente: "Marrie", tipo: "RX" },
        { data: "05/04/2025", paciente: "Meggie", tipo: "USG" },
        { data: "05/04/2025", paciente: "Dumbo", tipo: "RX" },
    ];

    const [laudoSelecionado, setLaudoSelecionado] = useState(null);

    const handleClick = (laudo, index) => {
        if (index <= 1) {
            setLaudoSelecionado(laudo);
        }
    };

    return (
        
        <div className="central">
            <Header/>
            <div className="abaHistorico">
                <h2 className="tituloHistorico">Histórico de Laudos</h2>
                <div className="conteudoHistorico">
                    <div className="listaLaudos">
                        {laudos.map((laudo, index) => (
                            <div 
                                className="cardLaudo" 
                                key={index}
                                onClick={() => handleClick(laudo, index)}
                                style={{ cursor: index <= 1 ? "pointer" : "default" }}
                            >
                                <img 
                                    src={laudo.tipo === "RX" ? iconeRX : iconeUSG} 
                                    alt={`ícone ${laudo.tipo}`} 
                                    className="iconeLaudo"
                                />
                                <p className="textoLaudo">
                                    {laudo.data} - Paciente: {laudo.paciente} - Laudo {laudo.tipo}
                                </p>
                            </div>
                        ))}
                    </div>

                    {laudoSelecionado && (
                        <div className="visualizadorLaudo">
                            <img 
                                src={laudoSelecionado.imagem} 
                                alt={`Laudo de ${laudoSelecionado.paciente}`} 
                                className="imagemLaudo"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    );
}
export default Historico;