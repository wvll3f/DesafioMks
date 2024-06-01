import { ContainerMain } from "./AppStyle"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import StoreFront from "./components/storefront/StoreFront"

function App() {

  return (
    <ContainerMain>
      <Header />
        <StoreFront />
      <Footer />
    </ContainerMain>
  )
}

export default App
