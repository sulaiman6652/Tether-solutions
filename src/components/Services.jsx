import { Layout, CalendarCheck, Users, MessageSquare, Wrench } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const services = [
  { icon: Layout,        title: 'High-Converting Landing Page', description: 'Turn visitors into real enquiries.',                               color: 'bg-blue-900/50 text-blue-400 border border-blue-800/40',   grad: 'from-blue-500 to-blue-700' },
  { icon: CalendarCheck, title: 'Booking System',               description: 'Let clients book instantly without back-and-forth.',               color: 'bg-violet-900/50 text-violet-400 border border-violet-800/40', grad: 'from-violet-500 to-violet-700' },
  { icon: Users,         title: 'Lead Capture + CRM',           description: 'Keep track of every potential client in one place.',               color: 'bg-sky-900/50 text-sky-400 border border-sky-800/40',     grad: 'from-sky-500 to-sky-700' },
  { icon: MessageSquare, title: 'Automated Follow-Ups',         description: 'Instant replies via WhatsApp or email.',                           color: 'bg-green-900/50 text-green-400 border border-green-800/40', grad: 'from-green-500 to-green-700' },
  { icon: Wrench,        title: 'Custom Tools',                 description: 'Dashboards, portals, or systems tailored to your business.',       color: 'bg-orange-900/50 text-orange-400 border border-orange-800/40', grad: 'from-orange-500 to-orange-600' },
]

export default function Services() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Blue glow orb top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-14 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-900/50 text-blue-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Everything You Need To Grow
          </h2>
          <p className="text-gray-400 text-lg">
            Each piece works together to create one seamless system for your business.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color, grad }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal-scale ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-full group bg-gray-900 rounded-2xl p-7 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-gray-100 font-bold text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  <div className={`mt-5 h-0.5 w-8 rounded-full bg-gradient-to-r ${grad} opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500`} />
                </div>
              </div>
            )
          })}

          {/* All-in-one highlight card */}
          <div className={`reveal-scale ${headerInView ? 'in-view' : ''} delay-500`}>
            <div className="h-full bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-7 text-white flex flex-col justify-between shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <div>
                <span className="inline-block text-[10px] text-blue-300 font-bold uppercase tracking-widest mb-3">All-in-one</span>
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  One system. Every tool you need.
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Mix and match exactly what your business needs — nothing more, nothing less.
                </p>
              </div>
              <div className="mt-6 flex gap-1.5">
                {['blue','violet','sky','green','orange'].map((c, i) => (
                  <div key={i} className="h-1 flex-1 rounded-full bg-white/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
