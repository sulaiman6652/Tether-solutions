import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'More consistent bookings',
    text: 'Your calendar fills up automatically — no chasing required.',
  },
  {
    title: 'Faster response times',
    text: 'Automated replies mean leads hear from you instantly, 24/7.',
  },
  {
    title: 'Less manual work',
    text: 'Repetitive tasks are handled by your system, not your hands.',
  },
  {
    title: 'Better client experience',
    text: 'Clients get a seamless, professional journey from first touch to booked.',
  },
  {
    title: 'A business that runs more smoothly',
    text: 'Everything is organised, tracked, and working together.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: header */}
          <div>
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              What This Means For You
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              A well-built system doesn't just save time — it changes how your whole business feels to run.
            </p>

            {/* Stat row */}
            <div className="flex gap-8 mt-10">
              {[
                { value: '3×', label: 'More leads captured' },
                { value: '80%', label: 'Less manual admin' },
              ].map(({ value, label }, i) => (
                <div key={i}>
                  <p className="text-3xl font-extrabold text-blue-700">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: benefits list */}
          <div className="space-y-4">
            {benefits.map(({ title, text }, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
              >
                <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{title}</p>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
