import {Header} from "./Header.tsx";


function App() {

  //  console.log('App działa!')
  return (
    <>
        <Header myLuckyNumber={879} />
        <Header title="Jakiś inny tytuł" />
        <Header />
    </>
  )
}

export default App
