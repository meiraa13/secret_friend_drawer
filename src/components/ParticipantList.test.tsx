import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { ParticipantList } from "./ParticipantList";
import { useParticipantList } from "../state/hooks/useParticipantList";

jest.mock('../state/hooks/useParticipantList', ()=>{
    return {
        useParticipantList:jest.fn()
    }
})

describe('empty participant list', ()=>{
    
    beforeEach(()=>{
        (useParticipantList as jest.Mock).mockReturnValue([])
    })
    test('must render without elements', ()=>{
        render(
            <RecoilRoot>
                <ParticipantList />
            </RecoilRoot>
        )
    
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)
    })

    
    
    
})

describe('non empty participant list',()=>{
    
    const participants = ['Ana', 'Catarina']
    beforeEach(()=>{
        (useParticipantList as jest.Mock).mockReturnValue(participants)
    })

    test('must render with elements', ()=>{
        render(
            <RecoilRoot>
                <ParticipantList />
            </RecoilRoot>
        )
    
        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(participants.length)
    })
})