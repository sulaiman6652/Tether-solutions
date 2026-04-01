import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BookingProvider } from './context/BookingContext'
import BookingModal from './components/BookingModal'
import LandingPage from './pages/LandingPage'
import OfferPage from './pages/OfferPage'

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/offer" element={<OfferPage />} />
        </Routes>
      </BrowserRouter>
      <BookingModal />
    </BookingProvider>
  )
}
