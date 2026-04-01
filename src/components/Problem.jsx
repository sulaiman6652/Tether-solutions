import { BellOff, Clock, CalendarX, LayoutList, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: BellOff,
    title: 'Missed enquiries that never get followed up',
    description: 'Potential clients contact you and hear nothing back — they move on to a competitor.',
  },
  {
    icon: Clock,
    title: 'Slow responses that lose potential clients',
    description: 'By the time you reply, the lead has gone cold. Speed is everything.',
  },
  {
    icon: CalendarX,
    title: 'Manual booking processes that waste time',
    description: "Back-and-forth messages just to schedule a call. It's exhausting and inefficient.",
  },
  {
    icon: LayoutList,
    title: 'No clear system to track leads or customers',
    description: 'Leads scattered across emails, texts, and notes. Nothing is organised.',
  },
  {
    icon: TrendingDown,
    title: 'Too much admin, not enough growth',
    description: "You're spending time on tasks that should be automated — not on growing your business.",
  },
]

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            You're Probably Losing Clients Without Realising It
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Most service businesses don't have a proper system in place — and it's costing them money every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-500 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-gray-900 font-semibold text-base mb-2 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}

          {/* CTA nudge card */}
          <div className="bg-blue-700 rounded-2xl p-6 flex flex-col justify-between text-white">
            <p className="text-base font-semibold leading-snug">
              Sound familiar? There's a better way.
            </p>
            <p className="text-blue-200 text-sm mt-2 leading-relaxed">
              A simple system can fix all of this — and I can build it for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
