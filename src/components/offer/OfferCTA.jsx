import { ArrowRight } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'
import { useInView } from '../../hooks/useInView'

export default function OfferCTA() {
  const { openModal } = useBooking()
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/30 blur-3xl rounded-full" />
      </div>

      <div
        ref={ref}
        className={`reveal relative max-w-3xl mx-auto px-6 text-center ${inView ? 'in-view' : ''}`}
      >
        <span className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/40 text-blue-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          Take the next step
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to Stop{' '}
          <span className="text-blue-400">Losing Leads?</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
          If your business depends on leads, bookings, and client communication, the right system can save you time and help you grow.
        </p>

        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
        >
          Book Your Free Call
          <ArrowRight size={18} />
        </button>

        <p className="text-gray-500 text-sm mt-5">
          No commitment. Just a genuine conversation about your business.
        </p>
      </div>
    </section>
  )
}
