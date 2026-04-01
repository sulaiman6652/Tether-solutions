import {
  Heart, Dumbbell, Building2, Car, Sparkles, Truck, Briefcase,
} from 'lucide-react'

const clients = [
  { icon: Heart, label: 'Clinics', desc: 'Medical, dental, therapy, and wellness providers' },
  { icon: Dumbbell, label: 'Gyms & PTs', desc: 'Personal trainers and fitness studios' },
  { icon: Building2, label: 'Real Estate', desc: 'Agents, developers, and rental companies' },
  { icon: Car, label: 'Car Services', desc: 'Rental, detailing, and repair businesses' },
  { icon: Sparkles, label: 'Cleaning', desc: 'Residential and commercial cleaning companies' },
  { icon: Truck, label: 'Logistics', desc: 'Delivery, courier, and transport businesses' },
  { icon: Briefcase, label: 'Agencies', desc: 'Service providers and consultancies' },
]

export default function WhoItsFor() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Who This Is For
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Built For Service Businesses
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            This offer is designed for businesses that rely on a steady flow of enquiries, bookings, and client communication.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">{label}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}

          {/* "And more" card */}
          <div className="bg-blue-700 rounded-2xl p-5 flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">+</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">And more</p>
              <p className="text-blue-200 text-xs mt-0.5 leading-relaxed">
                Any business that runs on bookings and client communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
