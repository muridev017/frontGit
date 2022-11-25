import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import { Route } from "react-router-dom"
import {describe, expect, test} from "vitest"
import App from './App'

describe("App",  () => { 
    test("Renderizar a página inicial", () => {
        const {getByText} = render(<App />)
        
       expect(getByText(''))
    })
})