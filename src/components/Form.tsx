import { useRef, useState } from "react"
import { useAddParticipant } from "../state/hooks/useAddParticipant"
import { useErrorMessage } from "../state/hooks/useErrorMessage"

export function Form(){
    const [name, setName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const errorMessage = useErrorMessage()
    const addToListHook = useAddParticipant()
    function addParticipant (event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        addToListHook(name)
        setName('')
        inputRef.current?.focus()


    }


    return (
        <form onSubmit={addParticipant}>
            <input
                ref={inputRef} 
                type="text" 
                placeholder="Insira o nome do participante" 
                value={name}
                onChange={e =>setName(e.target.value)}
            />
            <button disabled={!name}>Adicionar</button>
            {errorMessage && <p role="alert">{errorMessage}</p>}

        </form>
    )
}