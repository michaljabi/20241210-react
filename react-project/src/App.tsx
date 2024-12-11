import {Menu} from "./Menu.tsx";
import {Outlet} from "react-router";

function App() {
  const subtitleName = 'react'

  return (
      <>
          <main className="container mb-5">
              <header className="hero is-link">
                  <div className="hero-body">
                      <h1 className="title">React Live Theory Project</h1>
                      <h4 className="subtitle">sprawdź jak działa {subtitleName}!...</h4>
                  </div>
              </header>

              <section className="columns mt-5">
                  <Menu />
                  <div className="column is-9 content">
                      <Outlet />
                  </div>
              </section>
          </main>
      </>
  )
}

export default App
