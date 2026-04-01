import { useBooking } from '../../context/BookingContext'

export default function OfferFooter() {
  const { openModal } = useBooking()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-700 text-white text-sm font-bold">
              T
            </span>
            <div>
              <p className="text-base font-bold leading-none">
                <span className="text-white">Tether</span>
                <span className="text-blue-400"> Solutions</span>
              </p>
              <p className="text-gray-500 text-xs mt-0.5">Systems that work for you.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <button
              onClick={openModal}
              className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Book a Call
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Tether Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
