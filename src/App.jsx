import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FirstPage from "./Pages/FirstPage/FirstPage"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <FirstPage />
    }
  ])
 
  return (
      <div className="app">
        <RouterProvider router={ router } />
      </div>
  )
}

export default App
