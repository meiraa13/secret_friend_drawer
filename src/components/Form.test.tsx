import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Form } from "./Form";
import { RecoilRoot } from "recoil";

describe('Form behavior',()=>{

    test('if input is empty, cant add new participants', ()=>{
        render(
            <RecoilRoot>
                <Form/>
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const button = screen.getByRole('button')
        
        expect(input).toBeInTheDocument()
        expect(button).toBeDisabled()
    })
    
    test('add participant if name exists', ()=>{
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const button = screen.getByRole('button')
    
        fireEvent.change(input, {
            target:{
                value:'Ana'
            }
        })
    
        fireEvent.click(button)
    
        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
    })
    
    test('cant add duplicate name', ()=>{
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const button = screen.getByRole('button')
    
        fireEvent.change(input, {
            target:{
                value:'Ana'
            }
        })
        fireEvent.click(button)
        
        fireEvent.change(input, {
            target:{
                value:'Ana'
            }
        })
        fireEvent.click(button)
    
        const errorMessage = screen.getByRole('alert')
    
        expect(errorMessage.textContent).toBe('cant add the same name')
    
    
    })
    
    test('error msg must go after timer', ()=>{
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        const input = screen.getByPlaceholderText('Insira o nome do participante')
        const button = screen.getByRole('button')
    
        fireEvent.change(input, {
            target:{
                value:'Ana'
            }
        })
        fireEvent.click(button)
        
        fireEvent.change(input, {
            target:{
                value:'Ana'
            }
        })
        fireEvent.click(button)
    
        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeInTheDocument() 
        // espera N segundos
        act(()=>{
            jest.runAllTimers()
    
        })
        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
     
    
    
    })

})
