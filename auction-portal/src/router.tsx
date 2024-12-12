import { createBrowserRouter } from 'react-router'
import App from "./App.tsx";
import {AuctionsPage} from "./auction/AuctionsPage.tsx";
import {NotFoundPage} from "./common/NotFoundPage.tsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: "auctions",
                element: <AuctionsPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    },
])
