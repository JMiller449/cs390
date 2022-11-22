import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {useEffect, useState} from "react";

import {Index} from "./pages";
import {Create} from "./pages/create";
import {View} from "./pages/view";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/view",
    element: <View />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
