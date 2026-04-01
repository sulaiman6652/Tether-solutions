import { ArrowRight } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

export default function CTA() {
  const { openModal } = useBooking()

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-5">
          Ready to grow?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Losing Clients.{' '}
          <span className="text-blue-400">Start Automating.</span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Every day without a system is missed opportunities.
        </p>

        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base"
        >
          Book Your Free Call
          <ArrowRight size={18} />
        </button>

        <p className="text-gray-600 text-sm mt-5">
          No commitment. No hard sell. Just a genuine conversation.
        </p>
      </div>
    </section>
  )
}
