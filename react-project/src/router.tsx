import {createBrowserRouter, Navigate} from "react-router";
import App from "./App.tsx";
import { Sample } from "./a-basics/Sample.tsx";
import {UsingJsx} from "./a-basics/UsingJsx.tsx";
import {HermeticStyle} from "./a-basics/HermeticStyle.tsx";
import {RenderDataCollection} from "./a-basics/RenderDataCollection.tsx";
import {CompositionAndProps} from "./a-basics/CompositionAndProps.tsx";
import {Redux} from "./e-state-management/Redux.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                // Użycie rewrite dla ścieżki / na ścieżkę /sample
                element: <Navigate to="/sample" replace />
            },
            {
                path: 'sample',
                element: <Sample />
            },
            {
                path: 'using-jsx',
                element: <UsingJsx />
            },
            {
                path: 'hermetic-style',
                element: <HermeticStyle />
            },
            {
                path: 'composition-and-props',
                element: <CompositionAndProps />
            },
            {
                path: 'render-data-collection',
                element: <RenderDataCollection />
            },
            // E
            {
                path: 'redux',
                element: <Redux />
            }
        ]
    }
])