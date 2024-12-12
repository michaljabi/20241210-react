import {Header} from "./Header.tsx";
import {MainMenu} from "./MainMenu.tsx";
import {ItemsInCart} from "./ItemsInCart.tsx";

function App() {

  const numberOfItems = 0;
  return (
    <>
        <Header />
        <main className="container">
           <MainMenu />
           <ItemsInCart counter={numberOfItems} />
        </main>
    </>
  )
}

export default App
