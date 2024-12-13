# Zadania na start
## Dzień 3

### Zadanie #1 | fake backend

1. Zainstaluj jako `devDependency` (z flagą `-D`) package: `json-server`
2. Sprawdź dokumentację: https://www.npmjs.com/package/json-server
3. Jako serwer, wystaw plik `fake-db.json`:
```json
{
  "auctions": [
    {
      "id": "91TG",
      "title": "Części do aparatu",
      "imgUrl": "https://picsum.photos/id/36/200/200",
      "description": "Jakiś opis",
      "price": 2000
    },
    {
      "id": "LqGA",
      "title": "Mac Book",
      "imgUrl": "https://picsum.photos/id/48/600/600",
      "description": "Używany - ale sprawny",
      "price": 4000
    },
    {
      "id": "kV-c",
      "title": "Smartfon",
      "imgUrl": "https://picsum.photos/id/160/600/600",
      "price": 800
    },
    {
      "id": "Ti72",
      "title": "Samochoód",
      "imgUrl": "https://picsum.photos/id/183/600/600",
      "description": "Zabytkowy ogórek",
      "price": 1200
    },
    {
      "title": "Most",
      "price": 30000,
      "imgUrl": "https://picsum.photos/id/134/600/600",
      "description": "stalowy",
      "id": "74Bs"
    }
  ]
}
```
4. Dopisz odpowiedni skrypt w [package.json](package.json) aby wystawić `fake-backend`
5. Jeśli wszystko poszło sprawnie, adres: http://localhost:3000/auctions powinien działać poprawnie
6. Przetestuj również na przykładowym `id` aukcji: http://localhost:3000/74Bs

### Zadanie #2 | Brakujące strony w routingu

1. Dodaj do `MainMenu` w to miejsce:
```html
            </div>
            <!-- tutaj -->
        </nav>
```
2. Te buttony:
```html
<div class="text-light">
    <a class="btn btn-outline-primary mx-2">
      ➕ Dodaj
    </a>
    <a class="btn btn-outline-secondary">
       Koszyk
    </a>
</div>
```
3. Przepraw na poprawne linki i dodaj brakujące strony do całego menu:
4. `AdvicesPage`, `CartPage`, `AddAuctionPage`
5. wepnij w tablicę routingu, sprawdź czy działają poprawnie


### Zadanie #3 | Interface aukcji

1. Na podstawie pojedyńczej aukcji, określ i nazwij jej `interface`, zapis w osobnym pliku `.ts`
2. Wyeksportuj, tak abyśmy mogli go używać w całej aplikacji


### Zadanie #4 | Nowy komponent AuctionCard

1. Przegotuj komponent wyświetlający aukcję na liście w [AuctionsPage](./src/auction/AuctionsPage.tsx)
2. Nazwij go `AuctionCard`
3. Oto jego HTML:
```html
<div class="card">
    <div class="card-header">Tytuł</div>
    <img class="card-img" src="" alt="" />
    <div class="card-body">
        <p class="card-text">opis...</p>
        <div class="d-flex justify-content-between align-content-center">
            <strong> 000 zł</strong>
            <button class="btn btn-outline-primary">
                🛒
            </button>
        </div>
    </div>
</div>
```
4. Przygotuj tablice z 1-2 aukcjami (pożycz na razie na sztywno z pliku .json) w `AuctionsPage`
5. Skorzystaj z przygotowanego wcześniej interface'u
6. Powtarzaj kod:
```jsx
<div className="col-12 col-sm-6 col-md-4 col-lg-3">
   <AuctionCard />
</div>
```
7. Mapuj listę aukcji na powyższy JSX, przekazując aukcje jako `props` do `ActionCard`, tak aby renderowały się z danymi 
