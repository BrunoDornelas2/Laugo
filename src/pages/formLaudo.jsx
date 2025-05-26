import React, { useState } from 'react';
import Editor from './editor';

function FormLaudo () {
    const [bexiga, setBexiga] = useState('');
    const [rimE, setRimE] = useState('');
    const [rimD, setRimD] = useState('');
    const [conteudoGerado, setConteudoGerado] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const gerarRecomendacao = () => {
        let texto = '';

        const valorBexiga = parseFloat(bexiga);
        if (!isNaN(valorBexiga)) {
            texto += `<p><strong>Bexiga:</strong> (${valorBexiga} cm) `;
            if (valorBexiga < 50) {
                texto += `Volume reduzido, possível hipocontratilidade.</p>`;
            } else if (valorBexiga >= 50 && valorBexiga <= 200) {
                texto += `Volume dentro dos padrões normais.</p>`;
            } else {
                texto += `Volume elevado, investigar retenção urinária.</p>`;
            }
        }

        const valorRimE = parseFloat(rimE);
        const valorRimD = parseFloat(rimD);
        if (!isNaN(valorRimE) && !isNaN(valorRimD)) {
            texto += `<p><strong>Rins:</strong> Rim Esquerdo: (${valorRimE} cm), Rim Direito: (${valorRimD} cm.) `;

            const mediaRins = (valorRimE + valorRimD) / 2;
            if (mediaRins < 9) {
                texto += `Ambos os rins apresentam tamanho reduzido. Suspeita de doença renal crônica.</p>`;
            } else if (mediaRins <= 12) {
                texto += `Tamanhos renais dentro da normalidade.</p>`;
            } else {
                texto += `Rins aumentados, possível processo inflamatório ou obstrutivo.</p>`;
            }
        } else {
            if (!isNaN(valorRimE)) {
                texto += `<p><strong>Rim Esquerdo (${valorRimE} cm):</strong> `;
                texto += valorRimE < 9
                    ? `Pequeno, possível doença renal crônica.</p>`
                    : valorRimE <= 12
                    ? `Tamanho normal.</p>`
                    : `Aumentado, investigar inflamação ou obstrução.</p>`;
            }
            if (!isNaN(valorRimD)) {
                texto += `<p><strong>Rim Direito (${valorRimD} cm):</strong> `;
                texto += valorRimD < 9
                    ? `Pequeno, possível doença renal crônica.</p>`
                    : valorRimD <= 12
                    ? `Tamanho normal.</p>`
                    : `Aumentado, investigar inflamação ou obstrução.</p>`;
            }
        }

        return texto;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const htmlGerado = `
            ${gerarRecomendacao()}
        `;

        setConteudoGerado(htmlGerado);
        setFormularioEnviado(true);
    };

    return (
        <div>
            {!formularioEnviado ? (
                <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' , color: '#fff'}}>
                    <h2>Preencha os dados aos quais desejar do exame</h2>
                    <div className='item-org'>
                        <label htmlFor="bexiga">Tamanho da Bexiga (cm):</label>
                        <input
                            type="number"
                            id="bexiga"
                            value={bexiga}
                            onChange={(e) => setBexiga(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                    </div>
                    <div className='item-org'>
                        <label htmlFor="rimE">Tamnho do Rim esquerdo (cm):</label>
                        <input
                            type="number"
                            id="rimE"
                            value={rimE}
                            onChange={(e) => setRimE(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                    </div>
                    <div className='item-org'>
                        <label htmlFor="rimD">Tamnho do Rim direito (cm):</label>
                        <input
                            type="number"
                            id="rimD"
                            value={rimD}
                            onChange={(e) => setRimD(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                    </div>
                    <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Gerar Conteúdo para Edição
                    </button>
                </form>
            ) : (
                <>
                    <Editor initialContent={conteudoGerado} />
                    <button onClick={() => setFormularioEnviado(false)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px'}}>
                        Voltar ao Formulário
                    </button>
                </>
            )}
        </div>
    );
}

export default FormLaudo