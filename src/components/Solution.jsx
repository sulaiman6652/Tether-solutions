import { Zap } from 'lucide-react'

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 mb-6">
          <Zap size={28} />
        </div>

        {/* Label */}
        <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-4">
          The Solution
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          A Simple System That Works{' '}
          <span className="text-blue-700">For You 24/7</span>
        </h2>

        {/* Body */}
        <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          I build custom systems that capture leads, turn them into bookings, and automate your business — so you can focus on what actually matters.
        </p>

        {/* Feature pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mt-4">
          {[
            { label: 'Capture', text: 'Every enquiry is captured automatically — no more missed messages.' },
            { label: 'Convert', text: 'Leads become bookings through smart follow-ups and instant responses.' },
            { label: 'Automate', text: 'Repetitive tasks run themselves so you can focus on delivering results.' },
          ].map(({ label, text }, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200"
            >
              <span className="inline-block text-blue-700 font-bold text-lg mb-2">{label}</span>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
