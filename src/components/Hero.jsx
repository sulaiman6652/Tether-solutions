import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-3xl -z-10 scale-110" />

      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">This Week</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">12 Bookings</p>
          </div>
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
            +34%
          </span>
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end gap-1.5 h-14 sm:h-16 pt-2">
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

        {/* Upcoming bookings */}
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

      {/* Floating cards — hidden on very small screens to prevent overflow */}
      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
          <Calendar size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">New booking!</p>
          <p className="text-[10px] text-gray-400">Auto-confirmed</p>
        </div>
      </div>

      <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
        <p className="text-[10px] text-gray-400 font-medium">Leads captured</p>
        <p className="text-base sm:text-lg font-bold text-blue-700 mt-0.5">48 <span className="text-xs font-normal text-gray-400">this month</span></p>
      </div>
    </div>
  )
}

export default function Hero() {
  const { openModal } = useBooking()

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Built for service businesses
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold leading-[1.1] tracking-tight text-gray-900">
                Get More Bookings{' '}
                <span className="text-blue-700">on Autopilot</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg">
                I help service businesses get more bookings, automate their workflow, and save hours every week — without needing a tech team.
              </p>
              <p className="text-xs text-gray-400 font-medium pt-1">
                Clinics · Gyms · Real Estate · Car Rentals · Cleaning Companies · Agencies · and more
              </p>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Book a Free Call
              <ArrowRight size={17} />
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
              <span>Simple systems built to help you grow faster.</span>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
