import { createBrowserRouter } from 'react-router'
import App from "./App.tsx";
import {AuctionsPage} from "./auction/AuctionsPage.tsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: "auctions",
                element: <AuctionsPage />
            }
        ]
    },
])
