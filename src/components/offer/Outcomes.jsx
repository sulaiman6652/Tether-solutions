import { CheckCircle2, TrendingUp, Clock, Minus, Star, LayoutGrid } from 'lucide-react'

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Get more consistent bookings',
    desc: 'Your pipeline fills up automatically — no chasing, no gaps.',
  },
  {
    icon: Clock,
    title: 'Respond to leads faster',
    desc: 'Automated replies mean potential clients hear from you in seconds, not hours.',
  },
  {
    icon: Minus,
    title: 'Save hours of admin every week',
    desc: 'Manual tasks are replaced by automated workflows that run without you.',
  },
  {
    icon: CheckCircle2,
    title: 'Reduce friction in your workflow',
    desc: 'Everything connects — leads, bookings, follow-ups, and clients in one flow.',
  },
  {
    icon: Star,
    title: 'Deliver a better client experience',
    desc: 'Clients get fast, professional communication from the first touchpoint.',
  },
  {
    icon: LayoutGrid,
    title: 'Run with more clarity and control',
    desc: 'See everything in one place and know exactly where your business stands.',
  },
]

export default function Outcomes() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              What This Helps You Do
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              A well-built system changes how your whole business feels to run — not just one part of it.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '3×', label: 'More leads captured' },
                { value: '80%', label: 'Less manual admin' },
                { value: '24/7', label: 'System runs automatically' },
                { value: '< 30s', label: 'Automated response time' },
              ].map(({ value, label }, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-2xl font-extrabold text-blue-700">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: outcome cards */}
          <div className="space-y-4">
            {outcomes.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-200"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mt-0.5">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{title}</p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
