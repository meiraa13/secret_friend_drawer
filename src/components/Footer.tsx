import { useNavigate } from "react-router-dom"
import { useParticipantList } from "../state/hooks/useParticipantList"

export function Footer(){

    const participants = useParticipantList()

    const navigate = useNavigate()

    function start(){
        navigate('/sorteio')
    }

    return (
        <footer>
            <button 
                disabled={participants.length < 3}
                onClick={start}
                >Iniciar Brincadeira
            </button>

        </footer>
    )
}