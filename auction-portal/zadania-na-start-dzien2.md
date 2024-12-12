# Zadania na start
## Dzień 2

### Zadanie #1 | Instalacja `bootstrap`

1. Doinstaluj bibliotekę `bootstrap` do projektu, skorzystaj z repozytorum [NPM](https://www.npmjs.com/).
2. Sprawdź polecenie `npm install` i jego warianty
3. Podczep `bootstrap` do projektu po przez modyfikację w `main.tsx`
4. Dopisz tam odpowiedni import pliku `.css`
5. `import "bootstrap/dist/css/bootstrap.css"` (zweryfikuj poprawność ścieżki w `node_modules/bootstrap/...`)
6. Sprawdź, czy bootstrap wyświetla się poprawnie.
7. Usuń `App.css` i wyczyść zawartość pliku `index.css`

Pomocne linki:

- https://www.npmjs.com/
- https://docs.npmjs.com/cli/v10/commands/npm-install
- https://getbootstrap.com/

### Zadanie #2 | Nowy komponent `MainMenu`

1. Utwórz nowy komponent `MainMenu`
2. Dodaj do niego kod i przepraw na `JSX`:
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
  <button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse show">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/auctions">Aukcje</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/promotions">Promocje</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/advices">Podpowiadamy</a>
      </li>
    </ul>
  </div>
</nav>
```
3. Osadź komponent na stronie `App.tsx` jako:
```jsx
<>
    <Header />
    <main className="container">
        {/* tutaj main menu ! */}
    </main>
</>
```
4. Sprawdź, czy wyświetla się poprawnie


