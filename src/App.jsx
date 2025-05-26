import {Login, Cadastro, Password, Home, Historico, FaleC, Laudos, Editor, FormLaudo} from './pages/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <div>
      <main>
            <Router>
              <ScrollToTop />
                <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Cadastro" element={<Cadastro />}/>
                <Route path="/Recup_senha" element={<Password />}/>
                <Route path="/Home_page" element={<Home />}/>
                <Route path="/Historico" element={<Historico />}/>
                <Route path="/fale_conosco" element={<FaleC />}/>
                <Route path="/laudos" element={<Laudos />}/>
                <Route path="/editor" element={<Editor />}/>
                <Route path="/formLaudo" element={<FormLaudo />}/>
                </Routes>
            </Router>
        </main>
    </div>
  )
}

export default App