import Header from "../components/Header";

function FaleC () {
    return(
   
   <div className="central">
       <Header/>
       <div className="fale-conosco-container">
                <div className="form-fc">
                    <h2 style={{fontWeight: '600', fontSize: '1.8125rem', marginTop: '30px', marginBottom: '10px'}}>Fale Conosco</h2>
                    <p style={{fontSize: '1.45rem'}}>
                        Estamos aqui para ajudar. Preencha o formulário e responderemos em breve.
                    </p>

                    <form style={{marginTop: '10px', textAlign: 'initial'}}>
                        <div>
                            <label htmlFor="nome" style={{ display: 'block', marginBottom: '10px', fontSize: '1.45rem', fontWeight: '500'}}>Nome</label>
                            <input type="text" id="nome" placeholder="Nome" required />
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginTop: '30px', marginBottom: '10px', fontSize: '1.45rem', fontWeight: '500'}}>E-mail</label>
                            <input type="email" id="email" placeholder="E-mail" required />
                        </div>

                        <div>
                            <label htmlFor="mensagem" style={{ display: 'block', marginTop: '30px', marginBottom: '10px', fontSize: '1.45rem', fontWeight: '500'}}>Mensagem</label>
                            <textarea id="mensagem" placeholder="Mensagem" rows="5" required ></textarea>
                        </div>

                        <button type="submit" className="btn-form">
                            Enviar mensagem
                        </button>
                    </form>
                </div>

                <div className="divisor-vertical"></div>

                <div className="form-fc">
                    <h2 style={{fontSize: '1.8125rem', marginTop: '30px', marginBottom: '20px', fontWeight: '400'}}>Informações de Contato</h2>
                    <div style={{fontWeight: '500', fontSize: '1.45rem'}}>
                        <p style={{padding: '10px'}}>laugo@empresa.com</p>
                        <p style={{padding: '10px'}}>(81) 99999-9999</p>
                        <p style={{padding: '10px'}}>Rua Laugo, 123, Recife - PE</p>
                    </div>
                </div>
            </div>
   </div>
   
    )
}

export default FaleC