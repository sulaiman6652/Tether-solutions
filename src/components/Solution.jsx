import { Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const pillars = [
  { label: 'Capture', text: 'Every enquiry is captured automatically — no more missed messages.', color: 'from-blue-500 to-blue-700', topBorder: 'border-t-blue-500' },
  { label: 'Convert', text: 'Leads become bookings through smart follow-ups and instant responses.', color: 'from-violet-500 to-violet-700', topBorder: 'border-t-violet-500' },
  { label: 'Automate', text: 'Repetitive tasks run themselves so you can focus on delivering results.', color: 'from-sky-500 to-sky-700', topBorder: 'border-t-sky-500' },
]

export default function Solution() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent — large radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <div
          ref={ref}
          className={`reveal-blur ${inView ? 'in-view' : ''}`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-6 shadow-[0_0_50px_rgba(59,130,246,0.4)] animate-float">
            <Zap size={30} />
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
          {pillars.map(({ label, text, color, topBorder }, i) => {
            const [cardRef, cardInView] = useInView()
            return (
              <div
                key={i}
                ref={cardRef}
                className={`reveal-scale ${cardInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`h-full bg-white border border-gray-100 border-t-2 ${topBorder} rounded-2xl p-6 text-left hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)] hover:-translate-y-2 transition-all duration-300 group`}>
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
