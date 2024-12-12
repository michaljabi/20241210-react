import { createBrowserRouter, Navigate } from "react-router";
import App from "./App.tsx";
import { Sample } from "./a-basics/Sample.tsx";
import { UsingJsx } from "./a-basics/UsingJsx.tsx";
import { HermeticStyle } from "./a-basics/HermeticStyle.tsx";
import { RenderDataCollection } from "./a-basics/RenderDataCollection.tsx";
import { CompositionAndProps } from "./a-basics/CompositionAndProps.tsx";
import { ParentToChild } from "./b-component-relations/ParentToChild.tsx";
import { ChildToParent } from "./b-component-relations/ChildToParent.tsx";
import { LongDistance } from "./b-component-relations/LongDistance.tsx";
import { UseState } from "./c-state-and-hooks/UseState.tsx";
import { UseEffect } from "./c-state-and-hooks/UseEffect.tsx";
import { UseRef } from "./c-state-and-hooks/UseRef.tsx";
import { SampleInput } from "./d-forms/SampleInput.tsx";
import { FormikForm } from "./d-forms/FormikForm.tsx";
import { ReactHookForm } from "./d-forms/ReactHookForm.tsx";
import { Redux } from "./e-state-management/Redux.tsx";
import { Testing } from "./f-testing/Testing.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        // Użycie rewrite dla ścieżki / na ścieżkę /sample
        element: <Navigate to="/sample" replace />,
      },
      {
        path: "sample",
        element: <Sample />,
      },
      {
        path: "using-jsx",
        element: <UsingJsx />,
      },
      {
        path: "hermetic-style",
        element: <HermeticStyle />,
      },
      {
        path: "composition-and-props",
        element: <CompositionAndProps />,
      },
      {
        path: "render-data-collection",
        element: <RenderDataCollection />,
      },
      // B
      {
        path: "parent-to-child",
        element: <ParentToChild />,
      },
      {
        path: "child-to-parent",
        element: <ChildToParent />,
      },
      {
        path: "long-distance",
        element: <LongDistance />,
      },
      // C
      {
        path: "use-state",
        element: <UseState />,
      },
      {
        path: "use-effect",
        element: <UseEffect />,
      },
      {
        path: "use-ref",
        element: <UseRef />,
      },
      // D
      {
        path: "input-sample",
        element: <SampleInput />,
      },
      {
        path: "formik",
        element: <FormikForm />,
      },
      {
        path: "react-hook-form",
        element: <ReactHookForm />,
      },
      // E
      {
        path: "redux",
        element: <Redux />,
      },
      // F
      {
        path: "test-preview",
        element: <Testing />,
      },
    ],
  },
]);
