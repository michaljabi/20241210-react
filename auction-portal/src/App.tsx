import {Header} from "./Header.tsx";
import {MainMenu} from "./MainMenu.tsx";

function App() {

  //  console.log('App działa!')
  return (
    <>
        <Header />
        <main className="container">
           <MainMenu />
        </main>
    </>
  )
}

export default App
