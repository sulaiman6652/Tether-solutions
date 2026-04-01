import { ArrowRight, CheckCircle2, Zap, Calendar, Users, BarChart2 } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'

function SystemVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-3xl -z-10 scale-110" />

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Business System</p>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Live
          </span>
        </div>

        {[
          { icon: Users, label: 'Lead comes in', sub: 'Via landing page form', color: 'bg-blue-50 text-blue-600' },
          { icon: Zap, label: 'Auto follow-up sent', sub: 'WhatsApp / Email in 30s', color: 'bg-violet-50 text-violet-600' },
          { icon: Calendar, label: 'Booking confirmed', sub: 'No back-and-forth', color: 'bg-sky-50 text-sky-600' },
          { icon: BarChart2, label: 'Lead tracked in CRM', sub: 'Pipeline updated automatically', color: 'bg-green-50 text-green-600' },
        ].map(({ icon: Icon, label, sub, color }, i) => (
          <div key={i} className="relative">
            {i < 3 && <div className="absolute left-5 top-full h-3 w-px bg-gray-100 z-0" />}
            <div className="relative z-10 flex items-center gap-3 bg-gray-50/70 rounded-xl px-3 py-2.5 border border-gray-100">
              <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
                <Icon size={15} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">{label}</p>
                <p className="text-[10px] text-gray-400">{sub}</p>
              </div>
              <div className="ml-auto shrink-0 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">{i + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating cards — hidden on small screens to prevent overflow */}
      <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2">
        <p className="text-[10px] text-gray-400 font-medium">Hours saved / week</p>
        <p className="text-lg font-extrabold text-blue-700 mt-0.5">12+ <span className="text-xs font-normal text-gray-400">hrs</span></p>
      </div>

      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center shrink-0">
          <CheckCircle2 size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">Fully automated</p>
          <p className="text-[10px] text-gray-400">Running 24/7</p>
        </div>
      </div>
    </div>
  )
}

export default function OfferHero() {
  const { openModal } = useBooking()

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Done-for-you business systems
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-[1.1] tracking-tight text-gray-900">
                The Business{' '}
                <span className="text-blue-700">Automation System</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                A custom-built system designed to help service businesses get more bookings, automate operations, and save hours every week.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
                This is for businesses that are tired of missed enquiries, manual admin, slow follow-ups, and messy workflows. I build simple systems that help you run smoother and grow faster.
              </p>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Book a Free Call
              <ArrowRight size={17} />
            </button>

            <p className="text-sm text-gray-400 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
              Built for service-based businesses that want better systems and better results.
            </p>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <SystemVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
