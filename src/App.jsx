import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"


const App = () => {

  const router = createBrowserRouter([
    { path: "/home", element: <Home /> },
    {path : '/', element : <Signup />},
    { path: "/login", element: <Login /> }
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App