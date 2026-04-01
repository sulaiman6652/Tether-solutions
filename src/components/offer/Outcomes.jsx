import { CheckCircle2, TrendingUp, Clock, Minus, Star, LayoutGrid } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const outcomes = [
  { icon: TrendingUp,   title: 'Get more consistent bookings',        desc: 'Your pipeline fills up automatically — no chasing, no gaps.' },
  { icon: Clock,        title: 'Respond to leads faster',             desc: 'Automated replies mean potential clients hear from you in seconds, not hours.' },
  { icon: Minus,        title: 'Save hours of admin every week',      desc: 'Manual tasks are replaced by automated workflows that run without you.' },
  { icon: CheckCircle2, title: 'Reduce friction in your workflow',    desc: 'Everything connects — leads, bookings, follow-ups, and clients in one flow.' },
  { icon: Star,         title: 'Deliver a better client experience',  desc: 'Clients get fast, professional communication from the first touchpoint.' },
  { icon: LayoutGrid,   title: 'Run with more clarity and control',   desc: 'See everything in one place and know exactly where your business stands.' },
]

const stats = [
  { value: '3×',    label: 'More leads captured' },
  { value: '80%',   label: 'Less manual admin' },
  { value: '24/7',  label: 'System runs automatically' },
  { value: '< 30s', label: 'Automated response time' },
]

export default function Outcomes() {
  const [leftRef, leftInView]   = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

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
              What This Helps You Do
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              A well-built system changes how your whole business feels to run — not just one part of it.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-300"
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
            {outcomes.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-card-lg hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mt-0.5 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
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
