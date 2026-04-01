import { AlertCircle, Clock, CalendarX, Hourglass, UserX, FolderOpen } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const problems = [
  { icon: AlertCircle, title: 'Leads come in but never get tracked',       desc: 'Enquiries fall through the gaps and you have no clear view of your pipeline.' },
  { icon: Clock,       title: 'Enquiries are missed or replied to too late', desc: 'Slow responses mean lost clients — they move on before you even follow up.' },
  { icon: CalendarX,   title: 'Bookings require too much manual effort',    desc: 'Back-and-forth scheduling wastes your time and frustrates potential clients.' },
  { icon: Hourglass,   title: 'Too much time wasted on admin',              desc: "You're spending hours on tasks that should be running automatically." },
  { icon: UserX,       title: 'Clients have a poor experience',             desc: 'Disorganised processes create confusion and reduce trust in your business.' },
  { icon: FolderOpen,  title: 'Everything is scattered across tools',       desc: 'Messages, spreadsheets, notes — nothing is in one place and nothing works together.' },
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
            Why Most Businesses Stay Stuck
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Without the right systems in place, growth becomes messy, slow, and frustrating.
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
