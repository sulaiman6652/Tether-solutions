import { ArrowRight, Calendar, CheckCircle2, Zap } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto mt-14">
      {/* Glow under card */}
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl scale-110 -z-10" />

      {/* Main card */}
      <div className="bg-gray-900/80 backdrop-blur border border-white/10 rounded-2xl p-5 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">This Week</p>
            <p className="text-2xl font-bold text-white mt-0.5">12 Bookings</p>
          </div>
          <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-500/20">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />+34%
          </span>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-1.5 h-16 pt-2">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md ${i === 5 ? 'bg-blue-500' : 'bg-white/10'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-gray-600">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i} className="flex-1 text-center">{d}</span>
          ))}
        </div>

        {/* Bookings */}
        <div className="border-t border-white/5 pt-3 space-y-2">
          {[
            { name: 'Sarah M.', time: 'Today 2:00 PM', status: 'confirmed' },
            { name: 'James T.', time: 'Tomorrow 10:30 AM', status: 'pending' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-xs font-bold shrink-0 border border-blue-500/20">
                {b.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-200 truncate">{b.name}</p>
                <p className="text-[10px] text-gray-500">{b.time}</p>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${b.status === 'confirmed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-gray-900 border border-white/10 rounded-xl shadow-xl px-3 py-2 items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
          <Calendar size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">New booking!</p>
          <p className="text-[10px] text-gray-500">Auto-confirmed</p>
        </div>
      </div>

      <div className="hidden sm:block absolute -top-5 -right-6 bg-gray-900 border border-white/10 rounded-xl shadow-xl px-3 py-2">
        <p className="text-[10px] text-gray-500 font-medium">Leads captured</p>
        <p className="text-lg font-bold text-blue-400 mt-0.5">48 <span className="text-xs font-normal text-gray-500">this month</span></p>
      </div>
    </div>
  )
}

export default function Hero() {
  const { openModal } = useBooking()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 pt-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-0 w-48 h-px bg-gradient-to-r from-transparent to-blue-600/30 pointer-events-none" />
      <div className="absolute top-24 right-0 w-48 h-px bg-gradient-to-l from-transparent to-blue-600/30 pointer-events-none" />
      <div className="absolute bottom-24 left-0 w-32 h-px bg-gradient-to-r from-transparent to-blue-600/20 pointer-events-none" />
      <div className="absolute bottom-24 right-0 w-32 h-px bg-gradient-to-l from-transparent to-blue-600/20 pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-5 sm:px-6 py-16 sm:py-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-700/40 text-blue-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Built for service businesses
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
          Get More Bookings{' '}
          <span className="text-blue-400">on Autopilot</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-3">
          I help service businesses get more bookings, automate their workflow, and save hours every week — without needing a tech team.
        </p>

        {/* Industry list */}
        <p className="text-xs text-gray-600 font-medium tracking-wide mb-10">
          Clinics · Gyms · Real Estate · Car Rentals · Cleaning Companies · Agencies · and more
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Book a Free Call
            <ArrowRight size={17} />
          </button>
          <a
            href="/offer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold px-7 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-200 text-sm sm:text-base"
          >
            See the Offer
            <Zap size={15} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
          <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
          <span>No commitment. Just a genuine conversation.</span>
        </div>

        {/* Dashboard visual */}
        <DashboardMockup />
      </div>
    </section>
  )
}
