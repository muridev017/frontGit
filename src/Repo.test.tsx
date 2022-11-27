import {describe, expect, test} from '@jest/globals'
import { render } from 'react-dom'
import App from './App'


describe("App module", () => {
    test('Renderizou', () => {
        expect(App()).toBe(render)
    })
})

