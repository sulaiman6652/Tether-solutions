import { ArrowRight, Calendar, CheckCircle2, TrendingUp, Clock } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-3xl scale-110 -z-10" />

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">This Week</p>
            <p className="text-2xl font-bold text-gray-900 mt-0.5">12 Bookings</p>
          </div>
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />+34%
          </span>
        </div>

        <div className="flex items-end gap-1.5 h-16 pt-2">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md ${i === 5 ? 'bg-blue-600' : 'bg-blue-100'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-gray-400">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i} className="flex-1 text-center">{d}</span>
          ))}
        </div>

        <div className="border-t border-gray-50 pt-3 space-y-2">
          {[
            { name: 'Sarah M.', time: 'Today 2:00 PM', status: 'confirmed' },
            { name: 'James T.', time: 'Tomorrow 10:30 AM', status: 'pending' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0">
                {b.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">{b.name}</p>
                <p className="text-[10px] text-gray-400">{b.time}</p>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${b.status === 'confirmed' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards — desktop only */}
      <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white border border-gray-100 rounded-xl shadow-lg px-3 py-2 items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
          <Calendar size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">New booking!</p>
          <p className="text-[10px] text-gray-400">Auto-confirmed</p>
        </div>
      </div>

      <div className="hidden sm:block absolute -top-5 -right-6 bg-white border border-gray-100 rounded-xl shadow-lg px-3 py-2">
        <p className="text-[10px] text-gray-400 font-medium">Leads captured</p>
        <p className="text-lg font-bold text-blue-700 mt-0.5">48 <span className="text-xs font-normal text-gray-400">this month</span></p>
      </div>
    </div>
  )
}

export default function Hero() {
  const { openModal } = useBooking()

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden">

      {/* Mobile-specific gradient band at top */}
      <div className="absolute top-16 left-0 right-0 h-72 bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none lg:hidden" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-0 w-48 h-px bg-gradient-to-r from-transparent to-blue-200 pointer-events-none" />
      <div className="absolute top-24 right-0 w-48 h-px bg-gradient-to-l from-transparent to-blue-200 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Copy */}
          <div className="space-y-6 animate-fade-in-up">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              Built for service businesses
            </div>

            {/* Headline — larger on mobile */}
            <div className="space-y-4">
              <h1 className="text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-5xl xl:text-[56px] font-extrabold tracking-tight text-gray-900">
                Get More Bookings{' '}
                <span className="text-blue-700">on Autopilot</span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
                I help service businesses get more bookings, automate their workflow, and save hours every week — without needing a tech team.
              </p>
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Clinics · Gyms · Real Estate · Car Rentals · Cleaning Companies · Agencies · and more
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={openModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base"
            >
              Book a Free Call
              <ArrowRight size={17} />
            </button>

            {/* Trust line */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
              <span>No commitment. Just a genuine conversation.</span>
            </div>

            {/* Mobile stats strip — hidden on desktop */}
            <div className="grid grid-cols-3 gap-3 pt-2 lg:hidden">
              {[
                { icon: TrendingUp, value: '3×', label: 'More leads' },
                { icon: Clock,      value: '<30s', label: 'Auto-reply' },
                { icon: Calendar,   value: '24/7', label: 'Runs itself' },
              ].map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-2xl p-3 text-center">
                  <Icon size={16} className="text-blue-600 mx-auto mb-1" />
                  <p className="text-blue-700 font-extrabold text-sm">{value}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex justify-end mt-4 lg:mt-0">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
