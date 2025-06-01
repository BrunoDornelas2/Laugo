import React, { useState, useEffect } from 'react';

function TextSelector({ initialText, componentId, onSelect }) {
  const [diagnosticosConfirmados, setDiagnosticosConfirmados] = useState([]);
  const [mostraInputNovo, setMostraInputNovo] = useState(false);
  const [textoNovoDiagnostico, setTextoNovoDiagnostico] = useState('');
  const [indiceSelecionado, setIndiceSelecionado] = useState(null);

  const textoBase = initialText;

  // Usa useEffect para resetar a seleção quando o initialText ou componentId mudarem
  useEffect(() => {
    setIndiceSelecionado(null);
  }, [initialText, componentId]);

  const handleCriarNovoDiagnostico = () => {
    setMostraInputNovo(true);
    setTextoNovoDiagnostico('');
  };

  const handleConfirmarDiagnostico = () => {
    if (textoNovoDiagnostico.trim() !== '') {
      setDiagnosticosConfirmados([...diagnosticosConfirmados, textoNovoDiagnostico]);
      setTextoNovoDiagnostico('');
      setMostraInputNovo(false);
    } else {
      alert('Por favor, escreva algo antes de confirmar.');
    }
  };

  const handleCancelarDiagnostico = () => {
    setTextoNovoDiagnostico('');
    setMostraInputNovo(false);
  };

  const handleSelecionarParagrafo = (index, textContent) => {
    setIndiceSelecionado(index);
    // Chama a função onSelect passada via props, incluindo o componentId
    if (onSelect) {
      onSelect(componentId, textContent);
    }
  };

  const handleTrocarSelecao = () => {
    setIndiceSelecionado(null);
    // Opcional: Se desejar limpar a seleção no componente pai ao "trocar seleção"
    if (onSelect) {
      onSelect(componentId, null);
    }
  };

  return (
    <div className='wrapper'>
      <div className='collapsible'>
        {/* Usar um id único para o checkbox, combinando com o componentId */}
        <input type='checkbox' id={`collapsibleHead-${componentId}`} />
        <label htmlFor={`collapsibleHead-${componentId}`}>Opções de Diagnóstico</label>
        <div className='collapsibleText'>
          {indiceSelecionado === null ? (
            <>
              {/* Parágrafo base */}
              <p onClick={() => handleSelecionarParagrafo(-1, textoBase)}>
                {textoBase}
              </p>

              {/* Diagnósticos confirmados clicáveis */}
              {diagnosticosConfirmados.map((diagnostico, index) => (
                <p
                  key={index}
                  className={indiceSelecionado === index ? 'selecionado' : ''}
                  onClick={() => handleSelecionarParagrafo(index, diagnostico)}
                >
                  {diagnostico}
                </p>
              ))}

              {/* Input para novo diagnóstico */}
              {mostraInputNovo && (
                <div style={{ marginTop: '20px' }}>
                  <textarea
                    rows="3"
                    cols="50"
                    value={textoNovoDiagnostico}
                    onChange={(e) => setTextoNovoDiagnostico(e.target.value)}
                    placeholder="Escreva seu novo diagnóstico aqui..."
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: 'white' }}
                  />
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button
                      type='button'
                      onClick={handleConfirmarDiagnostico}
                      style={{ padding: '8px 15px', backgroundColor: 'var(--color14)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Confirmar
                    </button>
                    <button
                      type='button'
                      onClick={handleCancelarDiagnostico}
                      style={{ padding: '8px 15px', backgroundColor: 'var(--color6)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}

              {!mostraInputNovo && (
                <button className='btnSelect' type="button" onClick={handleCriarNovoDiagnostico} style={{ marginTop: '20px', marginLeft: '5px' }}>
                  + Criar Novo Diagnóstico
                </button>
              )}
            </>
          ) : (
            <>
              {/* Exibir apenas o parágrafo selecionado */}
              <p className={'selecionado'}>
                {indiceSelecionado === -1 ? textoBase : diagnosticosConfirmados[indiceSelecionado]}
              </p>
              <button onClick={handleTrocarSelecao} className='btnSelect' style={{backgroundColor: 'var(--color2)'}}>
                Trocar Seleção
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextSelector;