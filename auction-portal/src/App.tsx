import {Header} from "./common/Header.tsx";
import {MainMenu} from "./common/MainMenu.tsx";
import {ItemsInCart} from "./shared/ItemsInCart.tsx";
import {Outlet} from "react-router";
// import {useSelector} from "react-redux";
// import {selectAllItemsCount} from "./auction/cart/cartSlice.ts";

function App() {

  // const numberOfItems = useSelector(selectAllItemsCount);
  return (
    <>
        <Header />
        <main className="container">
           <MainMenu />
           <ItemsInCart />
            {/* Outlet wpinamy tutaj ! */}
            <Outlet />
        </main>
    </>
  )
}

export default App
