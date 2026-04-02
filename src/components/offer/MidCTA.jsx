import { ArrowRight } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'
import { useInView } from '../../hooks/useInView'

export default function MidCTA() {
  const { openModal } = useBooking()
  const [ref, inView] = useInView()

  return (
    <section className="py-12 bg-blue-700">
      <div
        ref={ref}
        className={`reveal relative max-w-4xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 ${inView ? 'in-view' : ''}`}
      >
        <p className="text-white text-lg sm:text-xl font-bold text-center sm:text-left leading-snug">
          Sound like what you need?{' '}
          <span className="text-blue-200 font-medium">Book a free call — no commitment.</span>
        </p>
        <button
          onClick={openModal}
          className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm whitespace-nowrap"
        >
          Book a Free Call
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}
