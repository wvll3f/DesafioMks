import { ShoppingCartIcon } from 'lucide-react'
import * as H from './HeaderStyle'

function Header() {
    return (
        <H.Container>
            <H.Title>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </H.Title>

            <H.btCarrinho>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <H.Paragrafo>0</H.Paragrafo>
            </H.btCarrinho>
        </H.Container>
    )
}

export default Header