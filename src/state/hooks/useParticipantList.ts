import { useRecoilValue } from "recoil"
import { participantListState } from "../atom"


export function useParticipantList(){
    return useRecoilValue(participantListState)
}