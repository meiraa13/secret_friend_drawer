import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Footer } from "./Footer";
import { useParticipantList } from "../state/hooks/useParticipantList";



jest.mock('../state/hooks/useParticipantList', ()=>{
    return {
        useParticipantList:jest.fn()
    }
})

const mockNavigation = jest.fn()

jest.mock('react-router-dom',()=>{
    return {
        useNavigate:() => mockNavigation
    }
})
describe('if there is not enough participant', ()=>{
     
    beforeEach(()=>{
        (useParticipantList as jest.Mock).mockReturnValue([])
    })
    test('cant start the game', ()=>{
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')

        expect(button).toBeDisabled()
    })
})


describe('if there is enough participant', ()=>{
     
    beforeEach(()=>{
        (useParticipantList as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Alcione'])
    })
    test('can start the game', ()=>{
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')

        expect(button).not.toBeDisabled()
    })

    test('the game has begun', ()=>{
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigation).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledWith('/sorteio')

    })
})