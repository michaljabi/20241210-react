import { createBrowserRouter } from 'react-router'
import App from "./App.tsx";
import {NotFoundPage} from "./common/NotFoundPage.tsx";
import {AdvicesPage} from "./advice/AdvicesPage.tsx";
import {auctionRouting} from "./auction/auction-routing.tsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            ...auctionRouting,
            {
                path: "advices",
                element: <AdvicesPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    },
])
