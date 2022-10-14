import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
    return(
        <div className="home">
            <h3 className="title">Bem vindes</h3>
            <p>Escolha uma opção:</p>
            <Link className="link" to="/cadastrar">Cadastrar</Link>
            <Link className="link" to="/login">Login</Link>
        </div>
    )
}

export default Home;