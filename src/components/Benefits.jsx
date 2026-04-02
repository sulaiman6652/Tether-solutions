import { CheckCircle2, TrendingUp, Clock, Minus, Star, LayoutGrid } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const benefits = [
  { icon: TrendingUp, title: 'More consistent bookings',         text: 'Your pipeline fills up automatically — no chasing, no gaps.' },
  { icon: Clock,       title: 'Faster response times',           text: 'Automated replies mean potential clients hear from you instantly.' },
  { icon: Minus,       title: 'Less manual work',                text: 'Manual tasks are replaced by automated workflows that run without you.' },
  { icon: CheckCircle2,title: 'Reduce friction in your workflow', text: 'Everything connects — leads, bookings, follow-ups, and clients in one flow.' },
  { icon: Star,        title: 'Better client experience',        text: 'Clients get fast, professional communication from the first touchpoint.' },
]

const stats = [
  { value: '3×',    label: 'Designed to capture more leads' },
  { value: '80%',   label: 'Designed to cut manual admin' },
  { value: '24/7',  label: 'System runs without you' },
  { value: '< 30s', label: 'Automated response time' },
]

export default function Benefits() {
  const [leftRef, leftInView]   = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftInView ? 'in-view' : ''} lg:sticky lg:top-24`}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              What This Means For You
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Every system is built with these outcomes in mind — not as a promise, but as the goal.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="text-2xl font-extrabold text-blue-700">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightInView ? 'in-view' : ''} space-y-3`}
          >
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-card-lg hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mt-0.5 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
                </div>
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
