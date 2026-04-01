import { Layout, CalendarCheck, Users, MessageSquare, Wrench } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'High-Converting Landing Page',
    description: 'Turn visitors into real enquiries.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: CalendarCheck,
    title: 'Booking System',
    description: 'Let clients book instantly without back-and-forth.',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Users,
    title: 'Lead Capture + CRM',
    description: 'Keep track of every potential client in one place.',
    color: 'bg-sky-50 text-sky-700',
  },
  {
    icon: MessageSquare,
    title: 'Automated Follow-Ups',
    description: 'Instant replies via WhatsApp or email.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Wrench,
    title: 'Custom Tools',
    description: 'Dashboards, portals, or systems tailored to your business.',
    color: 'bg-orange-50 text-orange-700',
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Everything You Need To Grow
          </h2>
          <p className="text-gray-500 text-lg">
            Each piece works together to create one seamless system for your business.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-5`}>
                <Icon size={22} />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}

          {/* All-in-one highlight card */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-7 text-white flex flex-col justify-between shadow-lg">
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">All-in-one</p>
              <h3 className="text-white font-bold text-xl leading-snug mb-3">
                One system. Every tool you need.
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Mix and match exactly what your business needs — nothing more, nothing less.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
