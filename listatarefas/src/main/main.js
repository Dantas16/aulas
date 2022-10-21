import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from 'react-router-dom';

import Home from '../pages/home/home';
import Cadastro from '../pages/cadastro/cadastro';
import Login from '../pages/login/login';

function Main() {
    return(
        <Router>
           <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
           </Routes>
        </Router>
    )
}

export default Main;