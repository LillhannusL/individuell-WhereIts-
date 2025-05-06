import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LaningPage"
import EventsPage from "./Pages/EventsPage/EventsPage"
import OrderPage from "./Pages/OrderPage/OrderPage"
import ArtistPage from "./Pages/ArtistPage/ArtistPage"
import TicketsPage from "./Pages/TicketsPage/TicketsPage"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/events',
      element: <EventsPage />
    },
    {
      path: '/order',
      element: <OrderPage />
    },
    {
      path: '/artist/:id',
      element: <ArtistPage />
    },
    {
      path: '/tickets',
      element: <TicketsPage />
    }
  ])
 
  return (
      <div className="app">
        <RouterProvider router={ router } />
      </div>
  )
}

export default App
