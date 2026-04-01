import { Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const pillars = [
  { label: 'Capture', text: 'Every enquiry is captured automatically — no more missed messages.', color: 'from-blue-500 to-blue-700' },
  { label: 'Convert', text: 'Leads become bookings through smart follow-ups and instant responses.', color: 'from-violet-500 to-violet-700' },
  { label: 'Automate', text: 'Repetitive tasks run themselves so you can focus on delivering results.', color: 'from-sky-500 to-sky-700' },
]

export default function Solution() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <div
          ref={ref}
          className={`reveal ${inView ? 'in-view' : ''}`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-6 shadow-glow animate-float">
            <Zap size={26} />
          </div>

          <span className="block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-4">
            The Solution
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            A Simple System That Works{' '}
            <span className="text-blue-700">For You 24/7</span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            I build custom systems that capture leads, turn them into bookings, and automate your business — so you can focus on what actually matters.
          </p>
        </div>

        {/* Feature pillars */}
        <div className="grid sm:grid-cols-3 gap-5 mt-4">
          {pillars.map(({ label, text, color }, i) => {
            const [cardRef, cardInView] = useInView()
            return (
              <div
                key={i}
                ref={cardRef}
                className={`reveal ${cardInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-full bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left hover:border-blue-100 hover:bg-white hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${color} text-white text-sm font-bold mb-4 shadow-sm`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-gray-900 font-bold text-base mb-2">{label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
