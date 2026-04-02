import { BellOff, Clock, CalendarX, LayoutList, TrendingDown } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const problems = [
  {
    icon: BellOff,
    title: 'A client messaged you 3 days ago. You just saw it.',
    description: "They already booked someone else. Every hour you don't respond is a lead walking out the door.",
  },
  {
    icon: Clock,
    title: "You're replying to enquiries manually — at 11pm.",
    description: "Copy-paste the same message, check the calendar, send the link. Every. Single. Time.",
  },
  {
    icon: CalendarX,
    title: '6 messages back and forth just to book one call.',
    description: '"What time works for you?" "How about Thursday?" "Actually can we do Friday?" — there has to be a better way.',
  },
  {
    icon: LayoutList,
    title: "You have leads in your inbox, WhatsApp, and notes app.",
    description: "None of them are connected. Someone fell through the cracks this week and you probably don't even know it.",
  },
  {
    icon: TrendingDown,
    title: "You're too busy doing admin to actually grow.",
    description: "The business needs your attention but you're stuck chasing follow-ups and updating spreadsheets.",
  },
]

export default function Problem() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-14 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            You're Probably Losing Clients Without Realising It
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Most service businesses don't have a proper system in place — and it's costing them money every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ icon: Icon, title, description }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-red-50 text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            )
          })}

          {/* CTA nudge card */}
          <div className={`reveal ${headerInView ? 'in-view' : ''} delay-500`}>
            <div className="h-full bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-6 flex flex-col justify-between shadow-glow">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">→</span>
              </div>
              <div>
                <p className="text-white font-bold text-base leading-snug mb-2">
                  Sound familiar? There's a better way.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  A simple system can fix all of this — and I can build it for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
