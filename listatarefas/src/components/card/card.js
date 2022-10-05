
function Card({ titulo, dtHora, desc }) {
    return (
        <div>
            <h3>{titulo}</h3>
            <sub>{dtHora}</sub>
            <div>
                <p>{desc}</p>
            </div>
            <div>
                <a href=''>Editar</a>
                <a href=''>Excluir</a>
            </div>
        </div>
    )
}

export default Card;