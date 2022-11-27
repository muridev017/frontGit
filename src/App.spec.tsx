import {render} from '@testing-library/react'
import { Home } from './pages/home/Home'

describe('App Component', () => {
    it('should render home page', () => {
        const { findByText } = render(<Home/>)

        expect( findByText('Github Search Repository')).toBeInTheDocument()
    })
})