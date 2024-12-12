import {Header} from "./common/Header.tsx";
import {MainMenu} from "./common/MainMenu.tsx";
import {ItemsInCart} from "./shared/ItemsInCart.tsx";
import {Outlet} from "react-router";

function App() {

  const numberOfItems = 0;
  return (
    <>
        <Header />
        <main className="container">
           <MainMenu />
           <ItemsInCart counter={numberOfItems} />
            {/* Outlet wpinamy tutaj ! */}
            <Outlet />
        </main>
    </>
  )
}

export default App
