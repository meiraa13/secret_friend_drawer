import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export function useErrorMessage(){
    const message = useRecoilValue(errorState)
    return message
}