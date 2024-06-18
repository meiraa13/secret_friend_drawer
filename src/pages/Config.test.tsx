import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { ConfigPage } from "./ConfigPage";

const mockNavigation = jest.fn()

jest.mock('react-router-dom',()=>{
    return {
        useNavigate:() => mockNavigation
    }
})
describe('config page',()=>{
   
    test('must be rendered',()=>{
        const { container } = render(
            <RecoilRoot>
                <ConfigPage />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()

    })
})