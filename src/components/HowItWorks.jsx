import { useInView } from '../hooks/useInView'

const steps = [
  { number: '01', title: 'I Learn Your Business',        text: "Quick call to understand where you're losing time and clients.", detail: 'Free call' },
  { number: '02', title: 'I Build Your System',          text: 'Everything is set up for you, tailored to your workflow.',          detail: '1–2 weeks' },
  { number: '03', title: 'You Get Results',              text: 'More bookings, less admin, smoother operations.',                    detail: 'Full handover' },
]

export default function HowItWorks() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-xl mx-auto mb-16 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Simple. Fast. Effective.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+28px)] right-[calc(16.666%+28px)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          {steps.map(({ number, title, text, detail }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-blue-200 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:shadow-glow flex flex-col items-center justify-center mb-6 shadow-card transition-all duration-400">
                    <span className="text-blue-600 group-hover:text-blue-200 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{number}</span>
                    <span className="text-gray-900 group-hover:text-white font-extrabold text-xl leading-none transition-colors duration-300">{title.split(' ')[0]}</span>
                  </div>

                  <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-3">{text}</p>
                  <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {detail}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
