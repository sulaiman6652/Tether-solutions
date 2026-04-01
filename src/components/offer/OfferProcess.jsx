const steps = [
  {
    number: '01',
    title: 'Audit',
    text: 'We look at how your business currently gets leads, handles bookings, and manages workflow.',
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
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            How The Process Works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector — desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+20px)] right-[calc(16.666%+20px)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          {steps.map(({ number, title, text, detail }, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
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
          ))}
        </div>
      </div>
    </section>
  )
}
