import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { RouterProvider } from "react-router/dom";
import { router } from "./router.tsx";
// import {auctionService} from "./auction/auction.service.ts";

import './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// const user = {
//     name: 'Michał',
//     age: 18,
// }
//
// setTimeout(() => {}, );

// auctionService.getAll().then((d) => console.log(d.data) )