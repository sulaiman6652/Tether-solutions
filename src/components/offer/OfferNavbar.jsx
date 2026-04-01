import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'

export default function OfferNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo-full.png" alt="Tether Solutions" className="h-10 w-auto" />
        </a>

        <button
          onClick={openModal}
          className="hidden sm:inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
        >
          Book a Free Call
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-md">
          <button
            onClick={() => { setMenuOpen(false); openModal() }}
            className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
          >
            Book a Free Call
          </button>
        </div>
      )}
    </header>
  )
}
