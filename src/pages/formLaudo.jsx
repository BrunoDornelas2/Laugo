import React, { useState } from 'react';
import Editor from './editor';
import TextSelector from '../components/SeletorTexto';

function FormLaudo () {
    const [conteudoGerado, setConteudoGerado] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const [bexiga, setBexiga] = useState('');
    const [rimE, setRimE] = useState('');
    const [rimD, setRimD] = useState('');
    const [textoBexiga, setTextoBexiga] = useState('');
    const [textoRins, setTextoRins] = useState('');
    const [Duodeno, setDuodeno] = useState('');
    const [Jejuno, setJejuno] = useState('');
    const [textoAlças, setTextoAlças] = useState('');
    const [ascendente, setAscendente] = useState('');
    const [transversa, setTransversa] = useState('');
    const [descendente, setDescendente] = useState('');
    const [textoColon, setTextoColon] = useState('');
    const [baço, setBaço] = useState('');
    const [textoBaço, setTextoBaço] = useState('');
    const [estomago, setEstomago] = useState('');
    const [textoEstomago, setTextoEstomago] = useState('');
    const [figado, setFigado] = useState('');
    const [textoFigado, setTextoFigado] = useState('');
    const [vesicula, setVesicula] = useState('');
    const [textoVesicula, setTextoVesicula] = useState('');
    const [Pdireito, setPdireito] = useState('');
    const [Pesquerdo, setPesquerdo] = useState('');
    const [Pcorpo, setPcorpo] = useState('');
    const [textoPancreas, setTextoPancreas] = useState('');
    const [AEcranial, setAEcranial] = useState('');
    const [AEcaudal, setAEcaudal] = useState('');
    const [textoAE, setTextoAE] = useState('');
    const [ADcranial, setADcranial] = useState('');
    const [ADcaudal, setADcaudal] = useState('');
    const [textoAD, setTextoAD] = useState('');
    const [linfonodos, setLinfonodos] = useState('');
    const [textoLinfonodos, setTextoLinfonodos] = useState('');
    const [CA, setCA] = useState('');
    const [textoCA, setTextoCA] = useState('');
    const [TE, setTE] = useState('');
    const [TD, setTD] = useState('');
    const [textoTesticulos, setTextoTesticulos] = useState('');
    const [prostata, setProstata] = useState('');
    const [textoProstata, setTextoProstata] = useState('');
    const [uteroCorpo, setUteroCorpo] = useState('');
    const [cornoE, setCornoE] = useState('');
    const [cornoD, setCornoD] = useState('');
    const [textoUtero, setTextoUtero] = useState('');
    const [OE, setOE] = useState('');
    const [OE2, setOE2] = useState('');
    const [OD, setOD] = useState('');
    const [OD2, setOD2] = useState('');
    const [textoOvario, setTextoOvario] = useState('');

    const handleTextSelection = (id, text) => {
        if (id === 'bexiga') {
        setTextoBexiga(text);
        } else if (id === 'rins') {
        setTextoRins(text);
        } else if (id === 'AlçasIntestinais') {
        setTextoAlças(text);
        } else if (id === 'colon') {
        setTextoColon(text);
        } else if (id === 'baço') {
        setTextoBaço(text);
        } else if (id === 'estomago') {
        setTextoEstomago(text);
        } else if (id === 'figado') {
        setTextoFigado(text);
        } else if (id === 'vesicula') {
        setTextoVesicula(text);
        } else if (id === 'pancreas') {
        setTextoPancreas(text);
        } else if (id === 'AE') {
        setTextoAE(text);
        } else if (id === 'AD') {
        setTextoAD(text);
        } else if (id === 'linfonodos') {
        setTextoLinfonodos(text);
        } else if (id === 'CA') {
        setTextoCA(text);
        } else if (id === 'testiculos') {
        setTextoTesticulos(text);
        } else if (id === 'prostata') {
        setTextoProstata(text);
        } else if (id === 'utero') {
        setTextoUtero(text);
        } else if (id === 'ovario') {
        setTextoOvario(text);
        }
    };

    const gerarRecomendacao = () => {
        let texto = '';

        if (textoBexiga || bexiga) {
            const medida = bexiga ? ` (${bexiga} cm)` : '';
            texto += `<br><p><strong>Bexiga</strong>${medida} ${textoBexiga}</p><br>`;
        }

        if (textoRins || (rimE && rimD)) {
            const medida = (rimE && rimD) ? ` (RE: ${rimE} cm ; RD: ${rimD} cm)` : '';
            texto += `<p><strong>Rins</strong>${medida} ${textoRins}</p><br>`;
        }

        if (textoAlças || (Duodeno && Jejuno)) {
            const medida = (Duodeno && Jejuno) ? ` (Duodeno: ${Duodeno} cm ; Jejuno: ${Jejuno} cm)` : '';
            texto += `<p><strong>Alças Intestinais</strong>${medida} ${textoAlças}</p><br>`;
        }

        if (textoColon || (ascendente && transversa && descendente)) {
            const medida = (ascendente && transversa && descendente) ? ` (${ascendente} cm em porção ascendente, ${transversa} cm em porção transversa, ${descendente} cm em porção descendente)` : '';
            texto += `<p><strong>Cólon</strong>${medida} ${textoColon}</p><br>`;
        }

        if (textoBaço || baço) {
            const medida = baço ? ` (${baço} cm)` : '';
            texto += `<p><strong>Baço</strong>${medida} ${textoBaço}</p><br>`;
        }

        if (textoEstomago || estomago) {
            const medida = estomago ? ` (${estomago} cm)` : '';
            texto += `<p><strong>Estômago</strong>${medida} ${textoEstomago}</p><br>`;
        }

        if (textoFigado || figado) {
            const medida = figado ? ` (${figado} cm)` : '';
            texto += `<p><strong>Fígado</strong>${medida} ${textoFigado}</p><br>`;
        }

        if (textoVesicula || vesicula) {
            const medida = vesicula ? ` (${vesicula} cm)` : '';
            texto += `<p><strong>Vesícula</strong>${medida} ${textoVesicula}</p><br>`;
        }

        if (textoPancreas || (Pesquerdo && Pdireito && Pcorpo)) {
            const medida = (Pesquerdo && Pdireito && Pcorpo) ? ` (${Pesquerdo} cm em lobo esquerdo, ${Pdireito} cm em lobo direito; ${Pcorpo} cm em corpo)` : '';
            texto += `<p><strong>Pâncreas</strong>${medida} ${textoPancreas}</p><br>`;
        }

        if (textoAE || (AEcranial && AEcaudal)) {
            const medida = (AEcranial && AEcaudal) ? ` (${AEcranial} cm polo cranial; ${AEcaudal} cm polo caudal)` : '';
            texto += `<p><strong>Adrenal Esquerda</strong>${medida} ${textoAE}</p><br>`;
        }

        if (textoAD || (ADcranial && ADcaudal)) {
            const medida = (ADcranial && ADcaudal) ? ` (${ADcranial} cm polo cranial; ${ADcaudal} cm polo caudal)` : '';
            texto += `<p><strong>Adrenal Direita</strong>${medida} ${textoAD}</p><br>`;
        }

        if (textoLinfonodos || linfonodos) {
            const medida = linfonodos ? ` (${linfonodos} cm)` : '';
            texto += `<br><p><strong>Linfonodos</strong>${medida} ${textoLinfonodos}</p><br>`;
        }

        if (textoCA || CA) {
            const medida = CA ? ` (${CA} cm)` : '';
            texto += `<p><strong>Cavidade abdominal</strong>${medida} ${textoCA}</p><br>`;
        }

        if (textoTesticulos || (TD && TE)) {
            const medida = (TE && TD) ? ` (TE: ${TE} cm; TD: ${TD} cm)` : '';
            texto += `<p><strong>Testículos</strong>${medida} ${textoTesticulos}</p><br>`;
        }

        if (textoProstata || prostata) {
            const medida = prostata ? ` (${prostata} cm)` : '';
            texto += `<p><strong>Próstata</strong>${medida} ${textoProstata}</p><br>`;
        }

        if (textoUtero || (uteroCorpo && cornoE && cornoD)) {
            const medida = (uteroCorpo && cornoE && cornoD) ? ` (Corpo uterino: ${uteroCorpo} cm; Corno UT E: ${cornoE} cm; Corno UT D: ${cornoD} cm)` : '';
            texto += `<p><strong>Útero</strong>${medida} ${textoUtero}</p><br>`;
        }

        if (textoOvario || (OE && OD)) {
            const medida = (OE && OD && OE2 && OD2) ? ` (OV E: ${OE} cm x ${OE2}; OV D: ${OD} cm x ${OD2})` : '';
            texto += `<p><strong>Ovários</strong>${medida} ${textoOvario}</p>`;
        }


        return texto;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const html = gerarRecomendacao();

        setConteudoGerado(html);
        setFormularioEnviado(true);
    };

    return (
        <div style={{backgroundColor: 'var(--color8)', minHeight: '100vh'}}>
            {!formularioEnviado ? (
                <form onSubmit={handleSubmit} style={{ padding: '20px'}}>
                    <h2>Gerar Laudo Veterinário</h2>
                    <p style={{opacity: '0.6'}}>Preecha com os resultados do exame</p>
                    <div className= 'separador' style={{ marginTop: '10px'}}></div>
                    <div className='item-org'>
                        <label htmlFor="bexiga">Bexiga (cm):</label>
                        <input
                            type="number"
                            id="bexiga"
                            value={bexiga}
                            onChange={(e) => setBexiga(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="Normodistendida, com conteúdo anecoico em seu interior. Parede normoespessa e de aspecto regular. Ausencia de microlitiases."
                        componentId="bexiga"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="rimE">Rim esquerdo (cm):</label>
                            <input
                                type="number"
                                id="rimE"
                                value={rimE}
                                onChange={(e) => setRimE(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="rimD">Rim direito (cm):</label>
                            <input
                                type="number"
                                id="rimD"
                                value={rimD}
                                onChange={(e) => setRimD(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "com diametro bipolar preservado. Relação corticomedular mantida. Ecogenicidade da cortical mantida e capsula regular. Definição de arquitetura renal interna normal bilateralmente. Ausencia de dilatação de pelve bilateral."
                        componentId="rins"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="Duodeno">Duodeno (cm):</label>
                            <input
                                type="number"
                                id="Duodeno"
                                value={Duodeno}
                                onChange={(e) => setDuodeno(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="Jejuno">Jejuno (cm):</label>
                            <input
                                type="number"
                                id="Jejuno"
                                value={Jejuno}
                                onChange={(e) => setJejuno(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "com moderada quantidade de conteúdo mucoso e gasoso. Adequada visualização das camadas, peristaltismo preservado. Parede de espessura preservada e estratificação preservada."
                        componentId="AlçasIntestinais"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="ascendente">Cólon porção ascendente (cm):</label>
                            <input
                                type="number"
                                id="ascendente"
                                value={ascendente}
                                onChange={(e) => setAscendente(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="transversa">Cólon porção transversa (cm):</label>
                            <input
                                type="number"
                                id="transversa"
                                value={transversa}
                                onChange={(e) => setTransversa(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="descendente">Cólon porção descendente (cm):</label>
                            <input
                                type="number"
                                id="descendente"
                                value={descendente}
                                onChange={(e) => setDescendente(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "com presença de conteúdo gasoso e fecal. Parede de espessura preservada."
                        componentId="colon"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="baço">Baço (cm):</label>
                        <input
                            type="number"
                            id="baço"
                            value={baço}
                            onChange={(e) => setBaço(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="com dimensões preservadas, bordos lisas e regulares, com parenquima homogéneo, ecogenicidade preservada."
                        componentId="baço"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="estomago">Estômago (cm):</label>
                        <input
                            type="number"
                            id="estomago"
                            value={estomago}
                            onChange={(e) => setEstomago(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="distendido, apresentando conteúdo mucoso, gasoso, alimentar, e liquido em seu interior. Parede com espessura preservada. Definição de estratificação parietal mantida. Motilidade preservada."
                        componentId="estomago"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="figado">Fígado (cm):</label>
                        <input
                            type="number"
                            id="figado"
                            value={figado}
                            onChange={(e) => setFigado(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="com dimensões preservadas e bordos mantidos. Ecotextura homogênea. Ecogenicidade do parenquima mantida. Calibre dos vasos preservados."
                        componentId="figado"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="vesicula">Vesícula Biliar (cm):</label>
                        <input
                            type="number"
                            id="vesicula"
                            value={vesicula}
                            onChange={(e) => setVesicula(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="distendida por conteúdo anecogenico intraluminal. Parede normoespessada, de aspecto regular, ecogenicidade normal. Ausencia de dilatação de ductos biliares."
                        componentId="vesicula"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="esquerdo">Pâncreas lobo esquerdo (cm):</label>
                            <input
                                type="number"
                                id="esquerdo"
                                value={Pesquerdo}
                                onChange={(e) => setPesquerdo(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="direito">Pâncreas lobo direito (cm):</label>
                            <input
                                type="number"
                                id="direito"
                                value={Pdireito}
                                onChange={(e) => setPdireito(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="corpo">Pâncreas corpo (cm):</label>
                            <input
                                type="number"
                                id="corpo"
                                value={Pcorpo}
                                onChange={(e) => setPcorpo(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "apresentando dimensões habituais, ecogenicidade preservada e ecotextura homogénea."
                        componentId="pancreas"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="AEcranial">Adrenal esquerda polo cranial (cm):</label>
                            <input
                                type="number"
                                id="AEcranial"
                                value={AEcranial}
                                onChange={(e) => setAEcranial(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="AEcaudal">Adrenal esquerda polo caudal (cm):</label>
                            <input
                                type="number"
                                id="AEcaudal"
                                value={AEcaudal}
                                onChange={(e) => setAEcaudal(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "dimensões preservadas, formato mantido e ecogenicidade preservada."
                        componentId="AE"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="ADcranial">Adrenal direita polo cranial (cm):</label>
                            <input
                                type="number"
                                id="ADcranial"
                                value={ADcranial}
                                onChange={(e) => setADcranial(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="ADcaudal">Adrenal direita polo caudal (cm):</label>
                            <input
                                type="number"
                                id="ADcaudal"
                                value={ADcaudal}
                                onChange={(e) => setADcaudal(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "dimensões preservadas, formato mantido e ecogenicidade preservada."
                        componentId="AD"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="linfonodos">Linfonodos (cm):</label>
                        <input
                            type="number"
                            id="linfonodos"
                            value={linfonodos}
                            onChange={(e) => setLinfonodos(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="intra-abdominais com dimensões preservadas no momento do exame."
                        componentId="linfonodos"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="CA">Cavidade abdominal (cm):</label>
                        <input
                            type="number"
                            id="CA"
                            value={CA}
                            onChange={(e) => setCA(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="ausencia de liquido livre e mesenterio com ecogenicidade preservada."
                        componentId="CA"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="TE">Testículo esquerdo (cm):</label>
                            <input
                                type="number"
                                id="TE"
                                value={TE}
                                onChange={(e) => setTE(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="TD">Testículo direito (cm):</label>
                            <input
                                type="number"
                                id="TD"
                                value={TD}
                                onChange={(e) => setTD(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "em topografia escrotal. Dimensões preservadas, simétricos, aspecto homogeneo e mediastino testicular evidenciado."
                        componentId="testiculos"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <label htmlFor="prostata">Próstata (mL):</label>
                        <input
                            type="number"
                            id="prostata"
                            value={prostata}
                            onChange={(e) => setProstata(e.target.value)}
                            className='input-org'
                            step="0.1"
                        />
                        <TextSelector
                        initialText="com dimensões preservadas. Aspecto homogéneo, bilobado, ecogenicidade preservada e contornos regulares. Ausencia de lesões cisticas ou nodulares."
                        componentId="prostata"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="uteroCorpo">Corpo uterino (cm):</label>
                            <input
                                type="number"
                                id="uteroCorpo"
                                value={uteroCorpo}
                                onChange={(e) => setUteroCorpo(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="cornoE">Corno uterino esquerdo (cm):</label>
                            <input
                                type="number"
                                id="cornoE"
                                value={cornoE}
                                onChange={(e) => setCornoE(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="cornoD">Corno uterino direito (cm):</label>
                            <input
                                type="number"
                                id="cornoD"
                                value={cornoD}
                                onChange={(e) => setCornoD(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "com dimensões preservadas, ausencia de conteúdo intraluminal. Parede normoespessa e regular."
                        componentId="utero"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <div className='item-org'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="OE">Ovário esquerdo (cm):</label>
                            <input
                                type="number"
                                id="OE"
                                value={OE}
                                onChange={(e) => setOE(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                            <input
                                type="number"
                                id="OE2"
                                value={OE2}
                                onChange={(e) => setOE2(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="OD">Ovário direito (cm):</label>
                            <input
                                type="number"
                                id="OD"
                                value={OD}
                                onChange={(e) => setOD(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                            <input
                                type="number"
                                id="OD2"
                                value={OD2}
                                onChange={(e) => setOD2(e.target.value)}
                                className='input-org'
                                step="0.1"
                            />
                        </div>
                        </div>
                        <TextSelector
                        initialText= "com dimensões preservadas com ausência de lesões foliculares."
                        componentId="ovario"
                        onSelect={handleTextSelection}
                        />
                    </div>
                    <div className='separador'></div>
                    <button type="submit" className='btnGerar'>
                        Finalizar
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