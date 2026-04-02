import { AlertCircle, Clock, CalendarX, Hourglass, UserX, FolderOpen } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const problems = [
  { icon: AlertCircle, title: 'That lead who enquired Saturday night?',          desc: "By Monday morning they've already booked with your competitor. You never even saw the message." },
  { icon: Clock,       title: 'Every hour without a response costs you clients', desc: "Speed wins. If you're not replying in minutes, someone else is. Manually checking messages doesn't scale." },
  { icon: CalendarX,   title: 'You lose clients before they even book',          desc: "Too many steps to book, no instant confirmation, no follow-up — and they just go quiet." },
  { icon: Hourglass,   title: 'You did admin again instead of growing',          desc: "That hour you spent copy-pasting follow-ups and updating spreadsheets? That's an hour you didn't spend on the work that actually pays." },
  { icon: UserX,       title: 'Your first impression is costing you trust',      desc: "Slow replies, no confirmation, no structure. Clients notice — and it makes you look less professional than you are." },
  { icon: FolderOpen,  title: 'You have no idea what happened to that lead',     desc: "You remember talking to someone last week. Were they a yes? Did you follow up? It's all lost in your inbox." },
]

export default function OfferProblem() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-14 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            What's Actually Costing You Money Right Now
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Most of it is invisible — until you add it up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ icon: Icon, title, desc }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-full group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-card-lg hover:border-red-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-red-50 text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
