import { useInView } from '../../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Audit',
    text: 'I look at how your business currently gets leads, handles bookings, and manages workflow.',
    detail: 'Free call — no commitment',
  },
  {
    number: '02',
    title: 'Build',
    text: 'I create a tailored system designed around your business needs and customer journey.',
    detail: 'Typically 1–2 weeks',
  },
  {
    number: '03',
    title: 'Launch',
    text: 'You start using a cleaner, faster, more automated system that supports growth.',
    detail: 'Full handover + walkthrough',
  },
]

export default function OfferProcess() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

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
            How The Process Works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector — desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+20px)] right-[calc(16.666%+20px)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          {steps.map(({ number, title, text, detail }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''} relative flex flex-col items-center text-center group`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-blue-200 group-hover:border-blue-700 group-hover:bg-blue-700 flex flex-col items-center justify-center mb-6 shadow-sm transition-all duration-300">
                  <span className="text-blue-700 group-hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">{number}</span>
                  <span className="text-gray-900 group-hover:text-white font-extrabold text-xl leading-none transition-colors">{title}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-3">{text}</p>
                <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  {detail}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
