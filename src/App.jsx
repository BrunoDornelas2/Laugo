import {Login, Cadastro, Password, Home} from './pages/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
            <Router>
                <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Cadastro" element={<Cadastro />}/>
                <Route path="/Recup_senha" element={<Password />}/>
                <Route path="/Home_page" element={<Home />}/>
                </Routes>
            </Router>
        </main>
    </div>
  )
}

export default App