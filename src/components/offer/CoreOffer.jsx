import { Layout, CalendarCheck, Users, MessageSquare, Wrench, LayoutDashboard } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const items = [
  { icon: Layout,          title: 'High-Converting Landing Page', desc: 'A clean, focused page designed to turn visitors into real enquiries or bookings.',               color: 'bg-blue-50 text-blue-700',     tag: 'Included' },
  { icon: CalendarCheck,   title: 'Booking System Setup',         desc: 'Make it easy for clients to book without the back-and-forth.',                                   color: 'bg-violet-50 text-violet-700', tag: 'Included' },
  { icon: Users,           title: 'Lead Capture + CRM Flow',      desc: 'Track leads properly and keep everything organised in one place.',                               color: 'bg-sky-50 text-sky-700',       tag: 'Included' },
  { icon: MessageSquare,   title: 'Automated Follow-Ups',         desc: 'Send quick responses and reminders through email or WhatsApp.',                                  color: 'bg-green-50 text-green-700',   tag: 'Included' },
  { icon: Wrench,          title: 'Custom Internal Tools',        desc: 'Replace messy spreadsheets and manual workflows with something built around your business.',     color: 'bg-orange-50 text-orange-700', tag: 'Add-on' },
  { icon: LayoutDashboard, title: 'Client Portal Options',        desc: 'Give your clients a smoother, more professional experience when needed.',                        color: 'bg-pink-50 text-pink-700',     tag: 'Add-on' },
]

export default function CoreOffer() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-14 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            The Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            What You Get
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            A done-for-you business system designed around your workflow, so your business can run smoother, faster, and with less manual effort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, color, tag }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-full group bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${tag === 'Included' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug">{title}</h3>
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
