import { AlertCircle, Clock, CalendarX, Hourglass, UserX, FolderOpen } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: 'Leads come in but never get tracked',
    desc: 'Enquiries fall through the gaps and you have no clear view of your pipeline.',
  },
  {
    icon: Clock,
    title: 'Enquiries are missed or replied to too late',
    desc: 'Slow responses mean lost clients — they move on before you even follow up.',
  },
  {
    icon: CalendarX,
    title: 'Bookings require too much manual effort',
    desc: 'Back-and-forth scheduling wastes your time and frustrates potential clients.',
  },
  {
    icon: Hourglass,
    title: 'Too much time wasted on admin',
    desc: "You're spending hours on tasks that should be running automatically.",
  },
  {
    icon: UserX,
    title: 'Clients have a poor experience',
    desc: 'Disorganised processes create confusion and reduce trust in your business.',
  },
  {
    icon: FolderOpen,
    title: 'Everything is scattered across tools',
    desc: 'Messages, spreadsheets, notes — nothing is in one place and nothing works together.',
  },
]

export default function OfferProblem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Most Businesses Stay Stuck
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Without the right systems in place, growth becomes messy, slow, and frustrating.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-md hover:border-red-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-500 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
