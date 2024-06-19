import { useNavigate } from "react-router-dom"
import { useParticipantList } from "../state/hooks/useParticipantList"
import "./Footer.css"

export function Footer(){

    const participants = useParticipantList()

    const navigate = useNavigate()

    function start(){
        navigate('/sorteio')
    }

    return (
        <footer className="rodape-configuracoes">
            <button
                className="botao" 
                disabled={participants.length < 3}
                onClick={start}
                >Iniciar Brincadeira
            </button>
            {/* <img  /> */}

        </footer>
    )
}