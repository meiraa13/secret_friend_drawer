import { useParticipantList } from "../state/hooks/useParticipantList"

export function ParticipantList(){

    const participants:string[] = useParticipantList()


    return (
        <ul>
            {participants.map((participant)=>(
                <li key={participant}>{participant}</li>
            ))}
        </ul>
    )
}