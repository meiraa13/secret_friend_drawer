import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, participantListState } from "../atom"

export const useAddParticipant = ()=>{
    const setList = useSetRecoilState(participantListState)
    const list = useRecoilValue(participantListState)
    const setError = useSetRecoilState(errorState)
    return (name:string)=>{
        if(list.includes(name)){
            setError('cant add the same name')
            setTimeout(()=>{
                setError('')
            },5000)
            return
        }
        return setList(current => [...current, name])

    }
} 