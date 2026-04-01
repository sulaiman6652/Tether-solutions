const steps = [
  {
    number: '01',
    title: 'We Understand Your Business',
    text: "Quick call to identify where you're losing time and clients.",
  },
  {
    number: '02',
    title: 'I Build Your System',
    text: 'Everything is set up for you, tailored to your workflow.',
  },
  {
    number: '03',
    title: 'You Get Results',
    text: 'More bookings, less admin, smoother operations.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Simple. Fast. Effective.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[calc(16.666%+16px)] right-[calc(16.666%+16px)] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

          {steps.map(({ number, title, text }, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Step circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-blue-200 group-hover:border-blue-600 flex items-center justify-center mb-6 shadow-sm transition-colors duration-300">
                <span className="text-blue-700 font-extrabold text-lg">{number}</span>
              </div>

              <h3 className="text-gray-900 font-bold text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
