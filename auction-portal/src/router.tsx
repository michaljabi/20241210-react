import { createBrowserRouter } from 'react-router'
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: "auctions",
                element: <div>Aukcje...</div>
            }
        ]
    },
])
