import { Heart, Dumbbell, Building2, Car, Sparkles, Truck, Briefcase } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const clients = [
  { icon: Heart,    label: 'Clinics',      desc: 'Medical, dental, therapy, and wellness providers' },
  { icon: Dumbbell, label: 'Gyms & PTs',   desc: 'Personal trainers and fitness studios' },
  { icon: Building2,label: 'Real Estate',  desc: 'Agents, developers, and rental companies' },
  { icon: Car,      label: 'Car Services', desc: 'Rental, detailing, and repair businesses' },
  { icon: Sparkles, label: 'Cleaning',     desc: 'Residential and commercial cleaning companies' },
  { icon: Truck,    label: 'Logistics',    desc: 'Delivery, courier, and transport businesses' },
  { icon: Briefcase,label: 'Agencies',     desc: 'Service providers and consultancies' },
]

export default function WhoItsFor() {
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
            Who This Is For
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Built For Service Businesses
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            This offer is designed for businesses that rely on a steady flow of enquiries, bookings, and client communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map(({ icon: Icon, label, desc }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="group h-full bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-card-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-glow transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{label}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* And more */}
          <div className={`reveal ${headerInView ? 'in-view' : ''} delay-500`}>
            <div className="h-full bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-5 flex flex-col items-start gap-3 shadow-glow">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-white font-extrabold text-xl">+</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">And more</p>
                <p className="text-blue-200 text-xs mt-0.5 leading-relaxed">Any business that runs on bookings and client communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
